import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { neutral5, primaryPurple4 } from '../../constant/color';
import Separator from '../Separator';

function TextButton({ onPress, text, icon }) {
  return (
    <>
      <TouchableOpacity
        style={{ flexDirection: 'row', marginVertical: 18 }}
        onPress={onPress}
      >
        <Icon name={icon} color={primaryPurple4} size={24} />
        <Text style={{
          fontFamily: 'Poppins-Medium', fontSize: 18, color: neutral5, marginLeft: 16,
        }}
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
