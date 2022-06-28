import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES } from '../../constant';

function GoBackIcon({ iconColor, size, style }) {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);
  return (
    <TouchableOpacity
      onPress={handleGoBack}
      style={{
        position: 'absolute', left: SIZES.padding2, backgroundColor: COLORS.neutral1, borderRadius: 100, ...style,
      }}
    >
      <Icon name="arrow-left" color={iconColor} size={size} />
    </TouchableOpacity>
  );
}

export default GoBackIcon;

const styles = StyleSheet.create({});
