/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  Home, Profile, Jual, NotLogin, Notification, DaftarJual,
} from '../screens/index';
import { COLORS, SIZES } from '../constant';

const Tab = createBottomTabNavigator();

function MainApp() {
  const navigation = useNavigation();

  const login = useSelector((state) => state.login.isLogin);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: COLORS.primaryPurple4,
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
              <Icon name="home" color={color} size={SIZES.icon} />
            ),
          }}
        />
        {login && (
          <>
            <Tab.Screen
              name="Notification"
              component={Notification}
              options={{
                tabBarLabel: 'Notifikasi',
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <Icon name="bell" color={color} size={SIZES.icon} />
                ),
              }}
            />
            <Tab.Screen
              name="Jual"
              component={Jual}
              listeners={{
                tabPress: (e) => {
                  // Prevent default action
                  e.preventDefault();
                  // Any custom code here
                  navigation.navigate('JualFull', { values: false, list: true });
                },
              }}
              options={{
                tabBarLabel: 'Jual',
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <Icon name="plus-circle" color={color} size={SIZES.icon} />
                ),
              }}
            />
            <Tab.Screen
              name="DaftarJual"
              component={DaftarJual}
              options={{
                tabBarLabel: 'DaftarJual',
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <Icon name="list" color={color} size={SIZES.icon} />
                ),
              }}
            />
          </>
        )}

        <Tab.Screen
          name="Profile"
          component={login ? Profile : NotLogin}
          options={{
            tabBarLabel: 'Akun',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon name="user" color={color} size={SIZES.icon} />
            ),
          }}
        />

      </Tab.Navigator>
    </>
  );
}

export default MainApp;
