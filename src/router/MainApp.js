/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { StatusBar, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { t } from 'i18next';
import {
  Home, Profile, Jual, NotLogin, Notification, DaftarJual,
} from '../screens/index';
import { COLORS, SIZES } from '../constant';

const Tab = createBottomTabNavigator();

function MainApp() {
  const navigation = useNavigation();

  const login = useSelector((state) => state.login.isLogin);
  const profileData = useSelector((state) => state.profile.profileData);
  const notificationData = useSelector((state) => state.notifications.notifikasi.filter((item) => item.read === false));

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
            tabBarLabel: t('home'),
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
                tabBarLabel: t('notification'),
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <View>
                    <Icon name="bell" color={color} size={22} />
                    {notificationData.length > 0 && (
                      <View
                        style={{
                          width: SIZES.base,
                          height: SIZES.base,
                          backgroundColor: COLORS.alertDanger,
                          borderRadius: 100,
                          position: 'absolute',
                          right: 4,
                        }}
                      />
                    )}
                  </View>
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
                  console.log(profileData.address !== null);

                  // eslint-disable-next-line no-unused-expressions
                  profileData.address !== null
                    ? navigation.navigate('JualFull', { data: false })
                    : navigation.navigate('ChangeProfile', { data: false });
                },
              }}
              options={{
                tabBarLabel: t('sell'),
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
                tabBarLabel: t('sellList'),
                headerShown: false,
                tabBarIcon: ({ color }) => (
                  <Icon name="list" color={color} size={SIZES.icon} />
                ),
              }}
            />
          </>
        )}

        <Tab.Screen
          name="Akun"
          component={login ? Profile : NotLogin}
          options={{
            tabBarLabel: t('account'),
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
