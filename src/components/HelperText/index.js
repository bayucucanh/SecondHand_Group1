import { View, Text } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../../constant';

function HelperText({ text }) {
  return (
    <Text style={[FONTS.bodyNormalMedium, {
      color: COLORS.alertDanger,
      paddingHorizontal: 16,
      marginTop: SIZES.base,
    }]}
    >
      {text}
    </Text>
  );
}

export default HelperText;
