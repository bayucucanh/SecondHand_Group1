import { View, Text } from 'react-native';
import React from 'react';
import { alertDanger } from '../../constant/color';

function HelperText({ text }) {
  return (
    <Text style={{
      fontFamily: 'Poppins-Medium',
      fontSize: 14,
      color: alertDanger,
      paddingHorizontal: 16,
      marginTop: 8,
    }}
    >
      {text}
    </Text>
  );
}

export default HelperText;
