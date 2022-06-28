import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS, FONTS, SIZES } from '../../constant';
import Separator from '../Separator';

function TextButton({ onPress, text, icon }) {
  return (
    <>
      <TouchableOpacity
        style={{ flexDirection: 'row', marginVertical: SIZES.padding4 }}
        onPress={onPress}
      >
        <Icon name={icon} color={COLORS.primaryPurple4} size={SIZES.icon} />
        <Text style={[FONTS.titleNormalMedium, {
          color: COLORS.neutral5, marginLeft: SIZES.padding5,
        }]}
        >
          {text}
        </Text>
      </TouchableOpacity>
      <Separator />
    </>
  );
}

export default TextButton;

const styles = StyleSheet.create({});
