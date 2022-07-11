import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Separator from '../Separator';
import { COLORS, FONTS, SIZES } from '../../constant';
import PhotoProfile from '../PhotoProfile';
import { formatRupiah, formatDate } from '../../utils';

function NotificationCard({
  image, date, name, price, offeringPrice, isSeen, status, accepted, bidderInfo, onPress,
}) {
  const { t, i18n } = useTranslation();

  const cekStatus = (value) => {
    if (value == 'create') {
      return t('successPost');
    }
    return t('productOffer');
  };

  return (
    <>
      <TouchableOpacity
        style={{
          marginTop: SIZES.padding5,
          flexDirection: 'row',
          marginBottom: SIZES.padding3,
        }}
        onPress={onPress}
      >
        <PhotoProfile
          image={{ uri: image }}
          style={{ width: 48, height: 48, marginRight: SIZES.padding3 }}
          styleImage={{ width: 48, height: 48 }}
        />
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '95%',
              }}
            >
              <Text style={{ ...FONTS.bodySmallRegular }}>
                {/* {status === 'accepted' ? t('productOffer') : t('successPost')} */}
                {cekStatus(status)}
              </Text>
              <Text style={{ ...FONTS.bodySmallRegular }}>{formatDate(date)}</Text>
            </View>
            {!isSeen && (
              <View
                style={{
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
            <Text style={{ ...FONTS.bodyLargeRegular, color: COLORS.neutral5 }}>
              {name}
            </Text>
            <Text
              style={{
                ...FONTS.bodyLargeRegular,
                color: COLORS.neutral5,
                textDecorationLine: accepted && 'line-through',
              }}
            >
              {formatRupiah(price)}
            </Text>
            {offeringPrice && (
              <>
                <Text
                  style={{
                    ...FONTS.bodyLargeRegular,
                    color: COLORS.neutral5,
                    textDecorationLine:
                      status === 'declined' ? 'line-through' : 'none',
                  }}
                >
                  {accepted ? t('successOfferPrice') : t('offerPrice')}
                  {' '}
                  {formatRupiah(offeringPrice)}
                </Text>
                {accepted && (
                  <Text style={{ ...FONTS.bodySmallRegular }}>
                    {t('offeringContact')}
                  </Text>
                )}
              </>
            )}
          </View>
        </View>
      </TouchableOpacity>
      {!bidderInfo && <Separator />}
    </>
  );
}

export default NotificationCard;

const styles = StyleSheet.create({});
