import {
  StyleSheet, Text, View, TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { neutral1, neutral3 } from '../../constant/color';

function SearchBar() {
  return (
    <View style={{
      marginHorizontal: 24,
      marginTop: 38,
      backgroundColor: neutral1,
      flexDirection: 'row',
      paddingHorizontal: 24,
      alignItems: 'center',
      borderRadius: 16,
    }}
    >
      <TextInput
        style={{
          fontFamily: 'Poppins-Regular', fontSize: 14, width: '90%', alignItems: 'baseline',
        }}
        placeholder="Cari di Second Chance"
      />
      <Icon name="search" color={neutral3} size={24} style={{ position: 'absolute', right: 24 }} />
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({});
