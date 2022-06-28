import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, SIZES } from '../../constant';
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
      <GoBackIcon iconColor={COLORS.primaryPurple4} size={SIZES.icon} />
      <Text style={[FONTS.bodyLargeMedium, { color: COLORS.neutral5 }]}>{title}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({});
