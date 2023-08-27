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

type MovieCardProps = {
  type: string;
  title: string;
  imagePath: string;
  width: DimensionValue;
  isFirst: boolean;
  isLast: boolean;
  hasSideMargins: boolean;
  onPress: () => void;
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
  type,
  title,
  imagePath,
  width,
  isFirst,
  isLast,
  hasSideMargins = false,
  onPress,
}: MovieCardProps) => {
  console.log('sideMargins', addSideMargin(hasSideMargins, isFirst, isLast));
  return (
    <View
      style={[
        styles.container,
        addSideMargin(hasSideMargins, isFirst, isLast),
        {maxWidth: width},
      ]}>
      <TouchableOpacity onPress={onPress}>
        <Image style={[styles.cover, {width}]} source={{uri: imagePath}} />
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
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
    fontSize: FONTSIZE.s_14,
    color: COLORS.White,
    textAlign: 'center',
    paddingVertical: SPACING.s_10,
  },
  cover: {
    aspectRatio: 2 / 3,
    borderRadius: BORDER_RADIUS.r_15,
  },
});

export default MovieCard;
