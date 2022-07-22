import {
  Text, View, TouchableOpacity, StatusBar, ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
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
  PhotoProfile, Separator, TextButton, TextHeader, Modal, AlertModal,
} from '../../components';
import { Avatar } from '../../assets';

function Profile({ navigation }) {
  const { t } = useTranslation();
  const isFocused = useIsFocused();
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const profileData = useSelector((state) => state.profile.profileData);
  const [modalVisible, setModalVisible] = useState(false);

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
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding5,
        paddingTop: SIZES.padding5,
        backgroundColor: COLORS.white,
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
          {profileData.image_url ? (
            <FastImage
              source={{ uri: profileData.image_url }}
              style={{
                width: 112,
                height: 112,
              }}
            />
          ) : (
            <Icon name="camera" color={COLORS.primaryPurple4} size={32} />
          )}
        </View>
      </View>
      <View>
        <TextButton onPress={() => navigation.navigate('ChangeProfile', { data: true })} icon="edit" text={t('goToChangeProfile')} />
        <TextButton icon="dollar-sign" text={t('goToHistory')} onPress={() => navigation.navigate('History')} />
        <TextButton icon="list" text={t('goToBuyerOrder')} onPress={() => navigation.navigate('BuyerOrder')} />
        <TextButton icon="bookmark" text={t('goToWishlist')} onPress={() => navigation.navigate('Wishlist')} />
        <TextButton icon="settings" text={t('goToSetting')} onPress={() => navigation.navigate('Setting')} />
        <TextButton onPress={() => setModalVisible(true)} icon="log-out" text={t('goToLogout')} />
      </View>
      <Text style={[FONTS.bodySmallRegular, {
        paddingBottom: SIZES.padding6,
        color: COLORS.neutral3,
        marginTop: SIZES.padding3,
        alignSelf: 'center',
      }]}
      >
        Version
        {' '}
        {appVersion}
      </Text>
      <AlertModal setModalVisible={setModalVisible} modalVisible={modalVisible} title={t('logoutTitle')} onPress={() => onLogout()} />
    </ScrollView>
  );
}

export default Profile;
