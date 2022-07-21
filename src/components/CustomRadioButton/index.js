import {
  StyleSheet, Text, View, TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useTranslation } from 'react-i18next';
import { RadioButton } from 'react-native-paper';
import { COLORS, FONTS, SIZES } from '../../constant';

function CustomRadioButton({ text, value }) {
  const { t } = useTranslation();

  return (
    <View style={{ flexDirection: 'row', marginTop: SIZES.padding5, marginHorizontal: SIZES.base }}>
      <View style={{ height: 10 }}>
        <RadioButton value={value} color={COLORS.primaryPurple4} />
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
          {t(text)}
        </Text>
      </View>
    </View>
  );
}

export default CustomRadioButton;
