/* eslint-disable no-unused-vars */
import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login</Text>
      <Button title='Register' onPress={() =>navigation.navigate('Register')} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
