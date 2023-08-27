import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {COLORS, SPACING} from '../theme/defaultTheme';
import InputHeader from '../components/InputHeader';
import {getNowPlayingMovies} from '../api/movies';
import {moviePosterPath} from '../api/apiValues';
import CategoryHeader from '../components/CategoryHeader';
import MovieCard from '../components/MovieCard';

const {width} = Dimensions.get('window');

const renderSecondaryItem =
  (length: number, onPress: () => any) =>
  ({item, index}: {item: any; index: number}): JSX.Element =>
    (
      <MovieCard
        title={item.original_title}
        type={''}
        imagePath={moviePosterPath(342, item.poster_path)}
        width={width / 3}
        isFirst={!index}
        isLast={index === length - 1}
        hasSideMargins={true}
        onPress={onPress}
      />
    );

const keyExtractor = ({id}: {original_title: string; id: string}): string => id;

const HomeScreen = ({navigation}: any) => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<any>(null);
  const [popularMovies, setPopularMovies] = useState<any>(null);
  const [upcomingMovies, setUpcomingMovies] = useState<any>(null);

  const searchMovie = (): void => navigation.navigate('Search');
  const onMovieCardPress = () => navigation.navigate('MovieDetails');

  useEffect(() => {
    const fetchNowPlayingMovies = async (): Promise<void> =>
      setNowPlayingMovies(await getNowPlayingMovies());

    fetchNowPlayingMovies();
  }, []);

  const renderMoviesSection = (): JSX.Element => {
    if (!(nowPlayingMovies || popularMovies || upcomingMovies)) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.Orange} />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <CategoryHeader title="Now Playing" />
        <CategoryHeader title="Popular" />
        <CategoryHeader title="Upcoming" />
        <FlatList
          data={nowPlayingMovies}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.containerGap36}
          renderItem={renderSecondaryItem(
            nowPlayingMovies.length || 0,
            onMovieCardPress,
          )}
          horizontal
        />
      </View>
    );
  };

  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      contentContainerStyle={styles.scrollViewContainer}>
      <View>
        <StatusBar hidden />
        <View style={styles.inputHeaderContainer}>
          <InputHeader onSearch={searchMovie} />
        </View>
        {renderMoviesSection()}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLORS.Black,
  },

  scrollViewContainer: {
    flex: 1,
  },

  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },

  inputHeaderContainer: {
    marginHorizontal: SPACING.s_36,
    marginTop: SPACING.s_28,
  },

  containerGap36: {
    gap: SPACING.s_28,
  },
});

export default HomeScreen;
