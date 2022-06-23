import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { neutral5, primaryPurple4 } from '../../constant/color';
import GoBackIcon from '../GoBackIcon';

function Header({ title }) {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);
  return (
    <View style={{
      height: 52,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <GoBackIcon iconColor={primaryPurple4} size={24} />
      <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 18, color: neutral5 }}>{title}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({});
