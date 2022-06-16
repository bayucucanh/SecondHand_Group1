import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { Login, Register, Splash } from '../screens/index';
import Auth from '../service/Auth';
import MainApp from './MainApp';
import { successLogin } from '../redux/actions';

const Stack = createNativeStackNavigator();

function Router() {
  const dispatch = useDispatch();

  const [loginCheck, setLoginCheck] = useState(true);

  const login = useSelector((state) => state.login.isLogin);

  useEffect(() => {
    console.log(login);
    getUser();
  }, []);

  const getUser = async () => {
    // Mengambil data yang ada pada storage
    const data = await Auth.getAccount();
    if (data != null) {
      // mengirim data yang ada pada storage ke action setUser
      dispatch(successLogin(data));
      // pengecekan login di buat false
      setLoginCheck(false);
    } else {
      // pengecekan login di buat false
      setLoginCheck(false);
    }
  };

  // digunakan agar langsung menampilkan halaman home
  if (loginCheck) {
    // ganti loading
    return null;
  }

  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />

      {!login && (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
        </>
      )}
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default Router;
