import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {
  neutral1, neutral4, primaryPurple1, primaryPurple4,
} from '../../constant/color';

function IconButton({ icon, text, active }) {
  return (
    <RectButton style={active ? styles.btnCategoryActive : styles.btnCategory}>
      <Icon name={icon} color={active ? neutral1 : neutral4} size={20} />
      <Text style={active ? styles.btnTextActive : styles.btnText}>
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
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: primaryPurple4,
    borderRadius: 12,
    marginRight: 16,
  },
  btnCategory: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: primaryPurple1,
    borderRadius: 12,
    marginRight: 16,
  },
  btnTextActive: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: neutral1,
    marginLeft: 8,
    textAlignVertical: 'center',
  },
  btnText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: neutral4,
    marginLeft: 8,
    textAlignVertical: 'center',
  },
});
