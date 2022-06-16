import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Router from './stack';

const index = () => (
  <NavigationContainer>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Router />
    </GestureHandlerRootView>
  </NavigationContainer>
);

export default index;
