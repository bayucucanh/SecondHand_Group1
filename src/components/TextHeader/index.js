import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { COLORS, FONTS } from '../../constant';

function TextHeader({ text }) {
  return (
    <Text style={[FONTS.headingNormalBold, { color: COLORS.neutral5 }]}>{text}</Text>
  );
}

export default TextHeader;
