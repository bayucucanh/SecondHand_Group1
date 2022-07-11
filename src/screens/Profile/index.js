import {
  Text, View, TouchableOpacity, StatusBar,
} from 'react-native';
import React, { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useIsFocused } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import { COLORS, FONTS, SIZES } from '../../constant';
import { version as appVersion } from '../../../package.json';
import Auth from '../../service/Auth';
import { getDataProfile, logout } from '../../redux/actions';
import FocusAwareStatusBar from '../../utils/focusAwareStatusBar';
import {
  PhotoProfile, Separator, TextButton, TextHeader,
} from '../../components';
import { Avatar } from '../../assets';

function Profile({ navigation }) {
  const { t } = useTranslation();
  const isFocused = useIsFocused();
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const profileData = useSelector((state) => state.profile.profileData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isFocused) {
      dispatch(getDataProfile(accessToken));
    }
  }, [isFocused]);

  const onLogout = () => {
    Auth.logout();
    dispatch(logout());
    navigation.replace('Splash');
  };

  return (
    <View style={{
      flex: 1, paddingHorizontal: SIZES.padding5, paddingTop: SIZES.padding5, backgroundColor: COLORS.white,
    }}
    >
      <FocusAwareStatusBar barStyle="dark-content" color="white" />
      <TextHeader text={t('profileTitle')} />
      <View style={{ marginVertical: SIZES.padding5, alignItems: 'center' }}>
        <View
          style={{
            width: 112,
            height: 112,
            backgroundColor: COLORS.primaryPurple1,
            borderRadius: SIZES.radius2,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          <FastImage
            source={profileData.image_url ? { uri: profileData.image_url } : Avatar}
            style={{
              width: 112,
              height: 112,
            }}
          />
        </View>
      </View>
      <View>
        <TextButton onPress={() => navigation.navigate('ChangeProfile')} icon="edit" text={t('goToChangeProfile')} />
        <TextButton icon="dollar-sign" text="History" onPress={() => navigation.navigate('History')} />
        <TextButton icon="settings" text={t('goToSetting')} onPress={() => navigation.navigate('Setting')} />
        <TextButton onPress={onLogout} icon="log-out" text={t('goToLogout')} />
      </View>
      <Text style={[FONTS.bodySmallRegular, {
        color: COLORS.neutral3, marginTop: SIZES.padding3, alignSelf: 'center',
      }]}
      >
        Version
        {' '}
        {appVersion}
      </Text>
    </View>
  );
}

export default Profile;
