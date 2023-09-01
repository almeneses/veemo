import React from 'react';
import {
  ActivityIndicator,
  DimensionValue,
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import CategoryHeader from './CategoryHeader';
import {COLORS, SPACING} from '../theme/defaultTheme';
import MovieCard from './MovieCard';
import {moviePosterPath} from '../api/apiValues';

type MoviesSubSectionProps = {
  title: string;
  data: any[];
  cardWidth: DimensionValue;
  onItemPress: () => any;
};

const keyExtractor = ({id}: {original_title: string; id: string}): string => id;

const renderMovieCard =
  (length: number, cardWidth: DimensionValue, onPress: () => any) =>
  ({item, index}: {item: any; index: number}): JSX.Element =>
    (
      <MovieCard
        title={item.original_title}
        type={''}
        imagePath={moviePosterPath(780, item.poster_path)}
        width={cardWidth}
        isFirst={!index}
        isLast={index === length - 1}
        hasSideMargins={true}
        onPress={onPress}
        genres={item.genre_ids.slice(1, 3)}
        voteAverage={item.vote_average}
        voteCount={item.vote_count}
      />
    );

const MoviesSubSection = ({
  title,
  data,
  cardWidth,
  onItemPress,
}: MoviesSubSectionProps) => {
  return (
    <View style={styles.container}>
      <CategoryHeader title={title} />
      {data ? (
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.containerGap36}
          renderItem={renderMovieCard(
            data?.length || 0,
            cardWidth,
            onItemPress,
          )}
          nestedScrollEnabled={true}
          horizontal
        />
      ) : (
        <ActivityIndicator
          size="large"
          color={COLORS.Orange}
          style={styles.loading}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  loading: {
    alignSelf: 'center',
    justifyContent: 'center',
  },

  containerGap36: {
    gap: SPACING.s_28,
  },
});

export default MoviesSubSection;
