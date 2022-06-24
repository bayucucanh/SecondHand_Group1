import {
  Text, View, TouchableOpacity, StatusBar,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import {
  lightGray,
  neutral1, neutral3, neutral5, primaryPurple1, primaryPurple4,
} from '../../constant/color';
import { version as appVersion } from '../../../package.json';
import Auth from '../../service/Auth';
import { logout } from '../../redux/actions';
import FocusAwareStatusBar from '../../utils/focusAwareStatusBar';
import {
  PhotoProfile, Separator, TextButton, TextHeader,
} from '../../components';

function Profile({ navigation }) {
  const profileData = useSelector((state) => state.profile.profileData);

  const dispatch = useDispatch();

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
      <FocusAwareStatusBar barStyle="dark-content" color="white" />
      <TextHeader text="Akun Saya" />
      <View style={{ marginVertical: 24 }}>
        <PhotoProfile image={{ uri: profileData.image_url }} disabled />
      </View>
      <View>
        <TextButton onPress={() => navigation.navigate('ChangeProfile')} icon="edit" text="Ubah Akun" />
        <TextButton icon="settings" text="Pengaturan Akun" />
        <TextButton onPress={onLogout} icon="log-out" text="Keluar" />
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
