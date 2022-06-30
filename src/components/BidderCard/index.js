import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import Separator from '../Separator';
import { COLORS, FONTS, SIZES } from '../../constant';
import PhotoProfile from '../PhotoProfile';
import CustomButton from '../CustomButton';

function BidderCard({
  image, date, name, price, offeringPrice, isSeen, status,
}) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <View style={{
        marginTop: SIZES.padding5, flexDirection: 'row',
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
            }}
            >
              {price}
            </Text>
            <Text style={{ ...FONTS.bodyLargeRegular, color: COLORS.neutral5 }}>
              {t('offerPrice')}
              {' '}
              {offeringPrice}
            </Text>

          </View>
        </View>
      </View>
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between', marginVertical: SIZES.padding3,
      }}
      >
        <View style={{
          flex: 1,
          marginRight: SIZES.base,
          borderColor: COLORS.primaryPurple4,
          borderWidth: 2,
          borderRadius: SIZES.radius2,
        }}
        >
          <CustomButton
                //   onPress={}
            title={t('sellPreviewButton')}
            type
            size="small"
            enabled
          />

        </View>
        <View style={{ flex: 1, marginLeft: 8 }}>
          <CustomButton
                //   onPress={}
            title={t('sellPostButton')}
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
