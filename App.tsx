/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
}

export default App;
