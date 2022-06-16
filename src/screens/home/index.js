import {
  Text, View,
} from 'react-native';
import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import Auth from '../../service/Auth';
// import { logout } from '../../redux/actions';

function Home() {
  // const dispatch = useDispatch();
  // const loginData = useSelector((state) => state.login);

  // const onLogout = () => {
  //   Auth.logout();
  //   dispatch(logout());
  //   navigation.replace('Splash');
  // };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontFamily: 'Poppins-Bold' }}>Home</Text>
      {/* <Button title="logout" onPress={onLogout} /> */}
      <View />
    </View>
  );
}

export default Home;
