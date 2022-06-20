/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { Home, Profile } from '../screens/index';
import { primaryPurple4 } from '../constant/color';

const Tab = createBottomTabNavigator();

function MainApp() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: primaryPurple4,
        tabBarStyle: {
          height: 62,
          paddingTop: 10,
          paddingHorizontal: 8,
          paddingBottom: 6,
        },
        tabBarLabelStyle: {
          fontFamily: 'Poppins-Bold',
          fontSize: 12,
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
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Akun',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainApp;
