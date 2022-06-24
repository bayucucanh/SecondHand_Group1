import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { neutral5 } from '../../constant/color';

function TextHeader({ text }) {
  return (
    <Text style={{ fontFamily: 'Poppins-Bold', fontSize: 24, color: neutral5 }}>{text}</Text>
  );
}

export default TextHeader;
