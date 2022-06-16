/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Home } from '../screens/index';

const Tab = createBottomTabNavigator();

function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#0D28A6',
        tabBarIconStyle: {
          size: 50,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainApp;
