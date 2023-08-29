import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/defaultTheme';

type CategoryHeaderProps = {title: string};

const CategoryHeader = ({title}: CategoryHeaderProps): JSX.Element => (
  <Text style={styles.text}>{title}</Text>
);

const styles = StyleSheet.create({
  text: {
    color: COLORS.White,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.s_20,
    paddingVertical: SPACING.s_28,
    paddingHorizontal: SPACING.s_36,
  },
});

export default CategoryHeader;
