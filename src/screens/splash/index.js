import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
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
