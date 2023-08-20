import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/defaultTheme';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Black,
  },
});

export default HomeScreen;
