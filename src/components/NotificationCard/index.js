import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Separator from '../Separator';
import { COLORS, FONTS, SIZES } from '../../constant';
import PhotoProfile from '../PhotoProfile';

function NotificationCard({
  image, date, name, price, offeringPrice, isSeen, status,
}) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <View style={{
        marginTop: SIZES.padding5, flexDirection: 'row', marginVertical: SIZES.padding4,
      }}
      >
        <PhotoProfile image={{ uri: image }} style={{ width: 48, height: 48, marginRight: SIZES.padding3 }} styleImage={{ width: 48, height: 48 }} />
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{
              flexDirection: 'row', justifyContent: 'space-between', width: '95%',
            }}
            >
              <Text style={{ ...FONTS.bodySmallRegular }}>
                {status === 'bid' ? t('productOffer') : t('successPost')}
              </Text>
              <Text style={{ ...FONTS.bodySmallRegular }}>{date}</Text>
            </View>
            {isSeen && (
            <View style={{
              width: SIZES.base,
              height: SIZES.base,
              backgroundColor: COLORS.alertDanger,
              marginTop: 4,
              marginLeft: SIZES.base,
              borderRadius: 100,
            }}
            />
            )}

          </View>
          <View>
            <Text style={{ ...FONTS.bodyLargeRegular, color: COLORS.neutral5 }}>{name}</Text>
            <Text style={{
              ...FONTS.bodyLargeRegular,
              color: COLORS.neutral5,
              textDecorationLine: offeringPrice && 'line-through',
            }}
            >
              {price}
            </Text>
            {offeringPrice && (
            <>
              <Text style={{ ...FONTS.bodyLargeRegular, color: COLORS.neutral5 }}>
                {t('successOfferPrice')}
                {' '}
                {offeringPrice}
              </Text>
              <Text style={{ ...FONTS.bodySmallRegular }}>
                {t('offeringContact')}
              </Text>
            </>
            )}
          </View>
        </View>
      </View>
      <Separator />
    </>
  );
}

export default NotificationCard;

const styles = StyleSheet.create({});
