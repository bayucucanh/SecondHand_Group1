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

export function BottomSheetSorting(value, setValue, handleSnapPress) {
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
        {t('BottomSheetSortingTitle')}
      </Text>
      <View>
        <RadioButton.Group
          onValueChange={(newValue) => setValue(newValue)}
          value={value}
        >
          <View style={{ flexDirection: 'row', marginTop: SIZES.padding5, marginHorizontal: SIZES.base }}>
            <View style={{ height: 10 }}>
              <RadioButton value="newest" color={COLORS.primaryPurple4} />
            </View>
            <View style={{ marginLeft: SIZES.padding4, marginTop: 5 }}>
              <Text
                style={{
                  textAlignVertical: 'center',
                  ...FONTS.bodyLargeMedium,
                  color: COLORS.black,
                  fontWeight: '400',
                }}
              >
                {t('newestTitle')}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: SIZES.padding5, marginHorizontal: SIZES.base }}>
            <View style={{ height: 10 }}>
              <RadioButton value="oldest" color={COLORS.primaryPurple4} />
            </View>
            <View style={{ marginLeft: SIZES.padding4, marginTop: 5 }}>
              <Text
                style={{
                  textAlignVertical: 'center',
                  ...FONTS.bodyLargeMedium,
                  color: COLORS.black,
                  fontWeight: '400',
                }}
              >
                {t('oldestTitle')}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: SIZES.padding5, marginHorizontal: SIZES.base }}>
            <View style={{ height: 10 }}>
              <RadioButton value="expensive" color={COLORS.primaryPurple4} />
            </View>
            <View style={{ marginLeft: SIZES.padding4, marginTop: 5 }}>
              <Text
                style={{
                  textAlignVertical: 'center',
                  ...FONTS.bodyLargeMedium,
                  color: COLORS.black,
                  fontWeight: '400',
                }}
              >
                {t('expensiveTitle')}
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: SIZES.padding5, marginHorizontal: SIZES.base }}>
            <View style={{ height: 10 }}>
              <RadioButton value="cheapest" color={COLORS.primaryPurple4} />
            </View>
            <View style={{ marginLeft: SIZES.padding4, marginTop: 5 }}>
              <Text
                style={{
                  textAlignVertical: 'center',
                  ...FONTS.bodyLargeMedium,
                  color: COLORS.black,
                  fontWeight: '400',
                }}
              >
                {t('cheapestTitle')}
              </Text>
            </View>
          </View>
        </RadioButton.Group>
      </View>
      <CustomButton
        onPress={() => handleSnapPress(0)}
        buttonStyle={{ width: '100%', marginTop: 15 }}
        title={t('sendButton')}
        enabled
      />
    </ScrollView>
  );
}
