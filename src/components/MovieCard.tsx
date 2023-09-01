import React from 'react';
import {
  DimensionValue,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  BORDER_RADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/defaultTheme';
import CustomIcon from './CustomIcon';

type MovieCardProps = {
  type: string;
  title: string;
  imagePath: string;
  width: DimensionValue;
  isFirst: boolean;
  isLast: boolean;
  hasSideMargins: boolean;
  genres: number[];
  voteAverage: number;
  voteCount: number;
  onPress: () => void;
};

const movieGenres: Record<number, string> = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

const addSideMargin = (
  hasSideMargins: boolean,
  isFirst: boolean,
  isLast: boolean,
) =>
  (!hasSideMargins && {}) ||
  (isFirst && {marginLeft: SPACING.s_32}) ||
  (isLast && {marginRight: SPACING.s_32}) ||
  {};

const MovieCard = ({
  title,
  imagePath,
  width,
  isFirst,
  isLast,
  genres,
  voteAverage,
  voteCount,
  hasSideMargins = false,
  onPress,
}: MovieCardProps) => {
  return (
    <View
      style={[
        styles.container,
        addSideMargin(hasSideMargins, isFirst, isLast),
        {maxWidth: width},
      ]}>
      <TouchableOpacity onPress={onPress}>
        <Image style={[styles.cover, {width}]} source={{uri: imagePath}} />
        <View>
          <View style={styles.rateContainer}>
            <CustomIcon name="star" style={styles.star} />
            <Text style={styles.vote}>
              {voteAverage} ({voteCount})
            </Text>
          </View>
          <Text numberOfLines={2} style={styles.title}>
            {title}
          </Text>
          <View style={styles.genreContainer}>
            {genres.map((genre: number) => (
              <View key={genre} style={styles.genreBox}>
                <Text style={styles.genreText}>{movieGenres[genre]}</Text>
              </View>
            ))}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  title: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.s_20,
    color: COLORS.White,
    textAlign: 'center',
    paddingVertical: SPACING.s_10,
  },
  cover: {
    aspectRatio: 2 / 3,
    borderRadius: BORDER_RADIUS.r_15,
  },
  rateContainer: {
    flexDirection: 'row',
    gap: SPACING.s_10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SPACING.s_10,
  },
  star: {
    fontSize: FONTSIZE.s_20,
    color: COLORS.Yellow,
  },
  vote: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.s_14,
    color: COLORS.White,
  },

  genreContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: SPACING.s_20,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  genreBox: {
    borderColor: COLORS.WhiteRGBA50,
    borderWidth: 1,
    borderRadius: BORDER_RADIUS.r_25,
    paddingVertical: SPACING.s_4,
    paddingHorizontal: SPACING.s_10,
  },
  genreText: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.s_10,
    color: COLORS.WhiteRGBA75,
  },
});

export default MovieCard;
