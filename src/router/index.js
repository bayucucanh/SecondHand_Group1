import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './stack';

const index = () => (
  <NavigationContainer>
    <Router />
  </NavigationContainer>
);

export default index;
