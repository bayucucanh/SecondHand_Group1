/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  StyleSheet, Text, View, Image, StatusBar,
} from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Logo } from '../../assets';
import { FONTS, COLORS } from '../../constant';

function Splash({ navigation }) {
  const login = useSelector((state) => state.login.isLogin);

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, []);

  return (
    <View style={{
      flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.white,
    }}
    >
      <StatusBar backgroundColor={COLORS.white} />
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.text}> by Group 1 - RN 3</Text>
    </View>
  );
}

export default Splash;

const styles = StyleSheet.create({
  logo: {
    width: 400,
    height: 400,
  },
  text: {
    position: 'absolute',
    bottom: 25,
    ...FONTS.body3,
    fontWeight: 'bold',
  },
});
