/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigators/TabNavigator';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

interface ScreenOptions {
  tab: NativeStackNavigationOptions;
}

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={stackNavigatorOptions}>
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={screenOptions.tab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const stackNavigatorOptions = {headerShown: false};
const screenOptions: ScreenOptions = {
  tab: {animation: 'default'},
};

export default App;
