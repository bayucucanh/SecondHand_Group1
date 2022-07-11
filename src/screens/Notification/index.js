import {
  StyleSheet, Text, View, Image, LogBox, FlatList,
} from 'react-native';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { SIZES, COLORS } from '../../constant';
import FocusAwareStatusBar from '../../utils/focusAwareStatusBar';
import {
  NotificationCard, Loading, TextHeader,
} from '../../components';
import { getDataNotification, patchNotifikasi } from '../../redux/actions';
import { DiminatiNull } from '../../assets/image';

function Notification() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.login.userData.access_token);
  const notificationData = useSelector((state) => state.notifications.notifikasi);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    dispatch(getDataNotification(accessToken));
    console.log('Data Notifikasi', notificationData);
  }, []);

  const empty = () => (
    <View style={{ alignItems: 'center', marginTop: 90 }}>
      <Image source={DiminatiNull} style={{ width: 172, height: 121 }} />
      <Text style={{ color: COLORS.neutral3, textAlign: 'center', fontSize: SIZES.h5 }}>Belum ada notifikasi nih</Text>
    </View>
  );

  const navigate = (status, values) => {
    if (status == 'create') {
      dispatch(patchNotifikasi(accessToken, values.id));
      navigation.navigate('Product', { id: values.Product.id, list: true });
    } else {
      dispatch(patchNotifikasi(accessToken, values.id));
      // navigation.navigate('BidderInfo', { orderId: values.id , cekId: true })
    }
  };

  return (
    <View style={{
      flex: 1, paddingHorizontal: SIZES.padding5, paddingTop: SIZES.padding5, backgroundColor: COLORS.white,
    }}
    >
      <FocusAwareStatusBar barStyle="dark-content" color="white" />
      <TextHeader text={t('notificationTitle')} />
      <FlatList
        data={notificationData}
        showsVerticalScrollIndicator={false}
        refreshing={Loading}
        keyExtractor={(item, index) => item.id + index.toString()}
        ListEmptyComponent={empty}
        renderItem={({ item }) => (
          <NotificationCard
            image={item?.Product?.image_url}
            name={item?.Product?.name}
            date="20 Apr, 14:04"
            price={item?.base_price}
            status={item?.status}
            offeringPrice={item?.bid_price}
            isSeen={item?.read}
            onPress={() => navigate(item?.status, item)}
          />
        )}
      />

      {/* <NotificationCard
        image="https://picsum.photos/48"
        name="Jam Tangan Casio"
        date="20 Apr, 14:04"
        price="Rp. 250.000"
        status="bid"
        offeringPrice="Rp. 200.000"
        accepted
        isSeen
      />
      <NotificationCard
        image="https://picsum.photos/48"
        name="Jam Tangan Casio"
        date="20 Apr, 14:04"
        price="Rp. 250.000"
        status="post"
        isSeen={false}
      /> */}
    </View>
  );
}

export default Notification;

const styles = StyleSheet.create({});
