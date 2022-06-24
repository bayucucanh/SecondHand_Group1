import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { neutral1 } from '../../constant/color';

function GoBackIcon({ iconColor, size, style }) {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);
  return (
    <TouchableOpacity
      onPress={handleGoBack}
      style={{
        position: 'absolute', left: 16, backgroundColor: neutral1, borderRadius: 150, ...style,
      }}
    >
      <Icon name="arrow-left" color={iconColor} size={size} />
    </TouchableOpacity>
  );
}

export default GoBackIcon;

const styles = StyleSheet.create({});
