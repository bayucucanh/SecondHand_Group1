import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Separator from '../Separator';
import { COLORS, FONTS, SIZES } from '../../constant';
import PhotoProfile from '../PhotoProfile';
import CustomButton from '../CustomButton';
import NotificationCard from '../NotificationCard';

function BidderCard({
  image, date, name, price, offeringPrice, isSeen, status, onPressDeclined, onPressAccepted,
}) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <NotificationCard
        image={image}
        name={name}
        date={date}
        price={price}
        status={status}
        offeringPrice={offeringPrice}
        isSeen={isSeen}
        bidderInfo
      />
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between', marginBottom: SIZES.padding3,
      }}
      >
        <View style={{
          flex: 1,
          marginRight: SIZES.base,
          borderColor: COLORS.primaryPurple4,
          borderWidth: 2,
          borderRadius: SIZES.radius2 + 10,
        }}
        >
          <CustomButton
            onPress={onPressDeclined}
            title={status === 'accepted' ? 'Status' : 'Tolak'}
            type
            size="small"
            enabled
          />

        </View>
        <View style={{
          flex: 1,
          marginRight: SIZES.base,
          borderColor: COLORS.primaryPurple4,
          borderWidth: 2,
          borderRadius: SIZES.radius2 + 10,
          overflow: 'hidden',
        }}
        >
          <CustomButton
            onPress={onPressAccepted}
            title={status === 'accepted' ? 'Hubungi' : 'Terima'}
            size="small"
            enabled
          />
        </View>
      </View>
      <Separator />
    </>
  );
}

export default BidderCard;
