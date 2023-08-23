import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {COLORS, FONTSIZE, SPACING} from '../theme/defaultTheme';
import CustomIcon from '../components/CustomIcon';

const Tab = createBottomTabNavigator();

const createTabIcon = ({focused, color, size}) => (
  <View
    style={[
      styles.activeTabBackground,
      {backgroundColor: focused ? COLORS.Orange : COLORS.White},
    ]}>
    <CustomIcon name="video" color={COLORS.White} size={FONTSIZE.s_30} />
  </View>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.Black,
          borderTopWidth: 0,
          height: SPACING.s_10 * 10,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: createTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeTabBackground: {
    backgroundColor: COLORS.Black,
    padding: SPACING.s_18,
    borderRadius: SPACING.s_18 * 10,
  },
});

export default TabNavigator;
