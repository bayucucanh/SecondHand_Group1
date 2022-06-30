import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { SIZES, COLORS, FONTS } from '../../constant';
import FocusAwareStatusBar from '../../utils/focusAwareStatusBar';
import {
  NotificationCard, PhotoProfile, Separator, TextHeader,
} from '../../components';

function Notification() {
  const { t, i18n } = useTranslation();

  return (
    <View style={{
      flex: 1, paddingHorizontal: SIZES.padding5, paddingTop: SIZES.padding5, backgroundColor: COLORS.white,
    }}
    >
      <FocusAwareStatusBar barStyle="dark-content" color="white" />
      <TextHeader text={t('notificationTitle')} />
      <NotificationCard
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
      />
    </View>
  );
}

export default Notification;

const styles = StyleSheet.create({});
