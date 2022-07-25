import {
  StyleSheet, Text, View, Image, LogBox, FlatList, RefreshControl, ScrollView,
} from 'react-native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { SIZES, COLORS, FONTS } from '../../constant';
import FocusAwareStatusBar from '../../utils/focusAwareStatusBar';
import {
  NotificationCard, Loading, TextHeader, LoadingScreen,
} from '../../components';
import { getDataNotification, patchNotifikasi, setRefresh } from '../../redux/actions';
import { DiminatiNull } from '../../assets/image';
import { SelectionImage } from '../../assets';

function Notification() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const notificationData = useSelector((state) => state.notifications.notifikasi);
  const loading = useSelector((state) => state.global.isLoading);
  const refresh = useSelector((state) => state.global.isRefresh);
  const isFocused = useIsFocused();

  const { t } = useTranslation();

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    dispatch(getDataNotification(accessToken));
    console.log('Data Notifikasi', notificationData);
  }, [isFocused]);

  const empty = () => (
    <View style={{
      alignItems: 'center', justifyContent: 'center', marginTop: SIZES.padding5, height: SIZES.height * 0.7,
    }}
    >
      <SelectionImage width={SIZES.width * 0.6} height={SIZES.width * 0.4} />
      <Text style={{
        color: COLORS.neutral3, textAlign: 'center', ...FONTS.bodyLargeRegular, marginTop: SIZES.padding3,
      }}
      >
        {t('emptyNotification')}
      </Text>
    </View>
  );

  const navigate = (status, values) => {
    if (status == 'create') {
      dispatch(patchNotifikasi(accessToken, values.id));
      navigation.navigate('MainApp', { screen: 'DaftarJual' });
    } else {
      dispatch(patchNotifikasi(accessToken, values.id));
      dispatch(getDataNotification(accessToken));
      if (values.notification_type == 'seller') {
        navigation.navigate('BidderInfo', { orderId: values.order_id });
      }
    }
  };

  const Refresh = () => {
    dispatch(getDataNotification(accessToken));
  };

  return (
    <>
      <ScrollView
        style={{
          flex: 1, paddingHorizontal: SIZES.padding5, paddingTop: SIZES.padding5, backgroundColor: COLORS.white,
        }}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={() => Refresh()} />
      }
      >
        <FocusAwareStatusBar barStyle="dark-content" color="white" />
        <TextHeader text={t('notificationTitle')} />
        <FlatList
          data={notificationData.sort((a, b) => a.createdAt < b.createdAt)}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => item.id + index.toString()}
          ListEmptyComponent={empty}
          renderItem={({ item }) => (
            <NotificationCard
              image={item?.Product?.image_url}
              name={item?.Product?.name}
              date={item?.createdAt}
              price={item?.base_price}
              status={item?.status}
              offeringPrice={item?.bid_price}
              isSeen={item?.read}
              onPress={() => navigate(item?.status, item)}
            />
          )}
        />
      </ScrollView>
      {loading && <LoadingScreen />}
    </>
  );
}

export default Notification;

const styles = StyleSheet.create({});
