import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';
import {
  lightGray,
  neutral1, neutral3, neutral5, primaryPurple1, primaryPurple4,
} from '../../constant/color';
import { version as appVersion } from '../../../package.json';
import Auth from '../../service/Auth';
import { logout } from '../../redux/actions';

function Profile({ navigation }) {
  const dispatch = useDispatch();
  //   const loginData = useSelector((state) => state.login);

  const onLogout = () => {
    Auth.logout();
    dispatch(logout());
    navigation.replace('Splash');
  };

  return (
    <View style={{
      flex: 1, paddingHorizontal: 24, paddingTop: 24, backgroundColor: neutral1,
    }}
    >
      <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 24, color: neutral5 }}>Akun Saya</Text>
      <View style={{ alignItems: 'center', marginVertical: 24 }}>
        <View style={{
          width: 112,
          height: 112,
          backgroundColor: primaryPurple1,
          borderRadius: 14,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <Icon name="camera" color={primaryPurple4} size={32} />
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={{ flexDirection: 'row', marginVertical: 18 }}
          onPress={() => navigation.navigate('ChangeProfile')}
        >
          <Icon name="edit" color={primaryPurple4} size={24} />
          <Text style={{
            fontFamily: 'Poppins-Medium', fontSize: 18, color: neutral5, marginLeft: 16,
          }}
          >
            Ubah Akun
          </Text>
        </TouchableOpacity>
        <View style={{ backgroundColor: lightGray, height: 2 }} />
        <TouchableOpacity style={{ flexDirection: 'row', marginVertical: 18 }}>
          <Icon name="settings" color={primaryPurple4} size={24} />
          <Text style={{
            fontFamily: 'Poppins-Medium', fontSize: 18, color: neutral5, marginLeft: 16,
          }}
          >
            Pengaturan Akun
          </Text>
        </TouchableOpacity>
        <View style={{ backgroundColor: lightGray, height: 2 }} />
        <TouchableOpacity
          style={{ flexDirection: 'row', marginVertical: 18 }}
          onPress={onLogout}
        >
          <Icon name="log-out" color={primaryPurple4} size={24} />
          <Text style={{
            fontFamily: 'Poppins-Medium', fontSize: 18, color: neutral5, marginLeft: 16,
          }}
          >
            Keluar
          </Text>
        </TouchableOpacity>
        <View style={{ backgroundColor: lightGray, height: 2 }} />
      </View>
      <Text style={{
        fontFamily: 'Poppins-Regular', fontSize: 14, color: neutral3, marginTop: 18, alignSelf: 'center',
      }}
      >
        Version
        {' '}
        {appVersion}
      </Text>
    </View>
  );
}

export default Profile;
