import {
  StyleSheet, Text, View, TextInput,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { useTranslation } from 'react-i18next';
import { COLORS, FONTS, SIZES } from '../../constant';

function SearchBar({ onChangeText, value }) {
  const { t, i18n } = useTranslation();

  return (
    <View style={{
      marginHorizontal: SIZES.padding5,
      marginTop: 38,
      backgroundColor: COLORS.neutral1,
      flexDirection: 'row',
      paddingHorizontal: SIZES.padding5,
      alignItems: 'center',
      borderRadius: SIZES.radius2,
    }}
    >
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={[FONTS.bodyNormalRegular, {
          width: '90%', alignItems: 'baseline',
        }]}
        placeholder={t('searchBarPlaceholder')}
      />
      <Icon name="search" color={COLORS.neutral3} size={SIZES.icon} style={{ position: 'absolute', right: SIZES.padding5 }} />
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({});
