import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/defaultTheme';

const CategoryHeader = ({title}: {title: string}): JSX.Element => (
  <Text style={styles.text}>{title}</Text>
);

const styles = StyleSheet.create({
  text: {
    color: COLORS.White,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.s_20,
    paddingVertical: SPACING.s_28,
  },
});

export default CategoryHeader;
