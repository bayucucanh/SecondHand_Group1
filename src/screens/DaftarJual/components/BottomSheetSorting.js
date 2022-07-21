import {
  ScrollView, Text, View, Image,
} from 'react-native';
import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { t } from 'i18next';
import { CustomButton, CustomRadioButton } from '../../../components';
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
          <CustomRadioButton value="newest" text="newestTitle" />
          <CustomRadioButton value="oldest" text="oldestTitle" />
          <CustomRadioButton value="expensive" text="expensiveTitle" />
          <CustomRadioButton value="cheapest" text="cheapestTitle" />
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
