import {
  ScrollView, Text, View, Image,
} from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { t } from 'i18next';
import { CustomButton } from '../../../components';
import styles from '../../../constant/styles';
import { COLORS, SIZES, FONTS } from '../../../constant';
import { patchStatusProduct } from '../../../redux/actions/pushProductStatus';
import { getDetailSellerOrder } from '../../../redux/actions';

export function BottomSheetStatus(value, setValue, productId, accessToken, dispatch) {
  const submitUpdate = (productStatus) => {
    const data = {
      status: productStatus,
    };
    dispatch(patchStatusProduct(accessToken, productId, data));
    dispatch(getDetailSellerOrder(productId, accessToken));
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        padding: SIZES.h2,
      }}
    >
      <Text
        style={{
          color: COLORS.black,
          ...FONTS.bodyLargeMedium,
          fontWeight: '500',
        }}
      >
        {t('bottomSheetStatusTitle')}
      </Text>
      <View style={{ marginTop: SIZES.padding5 }}>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          <View style={{ flexDirection: 'row', marginHorizontal: SIZES.base }}>
            <View style={{ height: 10 }}>
              <RadioButton value="seller" color={COLORS.primaryPurple4} />
            </View>
            <View style={{ marginLeft: SIZES.padding4 }}>
              <Text
                style={{
                  textAlignVertical: 'center',
                  ...FONTS.bodyNormalMedium,
                  color: COLORS.black,
                }}
              >
                {t('successSoldTitle')}
              </Text>
              <Text style={{ ...FONTS.bodyNormalMedium }}>
                {t('successSoldText')}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: SIZES.padding5, marginHorizontal: SIZES.base }}>
            <View style={{ height: 10 }}>
              <RadioButton value="available" color={COLORS.primaryPurple4} />
            </View>
            <View style={{ marginLeft: SIZES.padding4 }}>
              <Text
                style={{
                  textAlignVertical: 'center',
                  ...FONTS.bodyNormalMedium,
                  color: COLORS.black,
                  fontWeight: '400',
                }}
              >
                {t('cancelSoldTitle')}
              </Text>
              <Text style={{ ...FONTS.bodyNormalMedium }}>
                {t('cancelSoldText')}
              </Text>
            </View>
          </View>
        </RadioButton.Group>
      </View>
      <CustomButton
        onPress={() => submitUpdate(value)}
        buttonStyle={{ width: '100%', marginTop: 15 }}
        title={t('sendButton')}
        enabled
      />
    </ScrollView>
  );
}
