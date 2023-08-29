import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {COLORS, FONTSIZE, SPACING} from '../theme/defaultTheme';
import HomeScreen from '../screens/HomeScreen';
import CustomIcon from '../components/CustomIcon';
import SearchScreen from '../screens/SearchScreen';
import TicketScreen from '../screens/TicketScreen';
import UserScreen from '../screens/UserScreen';

const Tab = createBottomTabNavigator();

const createTabIcon =
  (iconName: string) =>
  ({focused}: {focused: boolean}): JSX.Element =>
    (
      <View
        style={[
          styles.activeTabBackground,
          focused && {backgroundColor: COLORS.Orange},
        ]}>
        <CustomIcon name={iconName} color={COLORS.White} size={FONTSIZE.s_30} />
      </View>
    );

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{tabBarShowLabel: false, tabBarIcon: createTabIcon('video')}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{tabBarShowLabel: false, tabBarIcon: createTabIcon('search')}}
      />
      <Tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{tabBarShowLabel: false, tabBarIcon: createTabIcon('ticket')}}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{tabBarShowLabel: false, tabBarIcon: createTabIcon('user')}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeTabBackground: {
    backgroundColor: COLORS.Black,
    padding: SPACING.s_12,
    borderRadius: SPACING.s_12 * 10,
  },

  tabBar: {
    backgroundColor: COLORS.Black,
    borderTopWidth: 0,
    height: '10%',
    maxHeight: SPACING.s_10 * 10,
  },
});

export default TabNavigator;
