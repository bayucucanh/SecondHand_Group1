/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
const Splash = ({navigation}) => {

  const login = useSelector(state => state.login.isLogin);

  useEffect(() => {
    setTimeout(() => {
      if(login) {
        navigation.replace('MainApp');
      } else {
        navigation.replace('Login');
      }
    }, 3000);
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
