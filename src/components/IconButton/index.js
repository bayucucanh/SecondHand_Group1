import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS, FONTS, SIZES } from '../../constant';

function IconButton({
  icon, text, active, onPress,
}) {
  return (
    <RectButton style={[active ? styles.btnCategoryActive : styles.btnCategory]} onPress={onPress} oneC>
      <Icon name={icon} color={active ? COLORS.neutral1 : COLORS.neutral4} size={20} />
      <Text style={[FONTS.bodyNormalRegular, active ? styles.btnTextActive : styles.btnText]}>
        {text}
      </Text>
    </RectButton>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  btnCategoryActive: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: SIZES.padding1,
    paddingHorizontal: SIZES.padding3,
    backgroundColor: COLORS.primaryPurple4,
    borderRadius: SIZES.radius1,
    marginRight: SIZES.padding3,
  },
  btnCategory: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: SIZES.padding1,
    paddingHorizontal: SIZES.padding3,
    backgroundColor: COLORS.primaryPurple1,
    borderRadius: SIZES.radius1,
    marginRight: SIZES.padding3,
  },
  btnTextActive: {
    color: COLORS.neutral1,
    marginLeft: SIZES.base,
    textAlignVertical: 'center',
  },
  btnText: {
    color: COLORS.neutral4,
    marginLeft: SIZES.base,
    textAlignVertical: 'center',
  },
});
