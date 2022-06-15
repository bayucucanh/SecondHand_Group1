/* eslint-disable no-unused-vars */
import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Auth from '../../service/Auth';
import { logout } from '../../redux/actions';

const Home = (props) => {
  const dispatch = useDispatch()
  const loginData = useSelector(state => state.login);

  const onLogout = () => {
    Auth.logout()
    dispatch(logout())
    props.navigation.replace('Splash')
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
      <Button title='logout' onPress={onLogout}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
