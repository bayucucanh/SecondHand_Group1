import {
  StyleSheet, Text, View, TextInput, TouchableOpacity,
} from 'react-native';
import React, { useState, useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { t } from 'i18next';
import { COLORS, FONTS, SIZES } from '../../constant';
import { GoBackIcon, SearchBar, Separator } from '../../components';

function Search({ navigation }) {
  const [searchProduct, setSearchProduct] = useState('');
  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);

  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.neutral1,
    }}
    >
      <View style={{ flexDirection: 'row', marginTop: SIZES.padding5, marginBottom: SIZES.padding2 }}>
        <View style={{ justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={handleGoBack}
            style={{
              left: SIZES.padding2, right: SIZES.padding2, backgroundColor: COLORS.neutral1, borderRadius: 100,
            }}
          >
            <Icon name="arrow-left" color={COLORS.primaryPurple4} size={SIZES.icon} />
          </TouchableOpacity>
        </View>
        <View style={{
          elevation: 4,
          marginHorizontal: SIZES.padding5,
          backgroundColor: COLORS.neutral1,
          flexDirection: 'row',
          paddingHorizontal: SIZES.padding5,
          alignItems: 'center',
          borderRadius: SIZES.radius2,
        }}
        >
          <TextInput
            style={[FONTS.bodyNormalRegular, {
              width: '90%',
              alignItems: 'baseline',
            }]}
            placeholder={t('searchBarPlaceholder')}
          />
          <Icon name="search" color={COLORS.neutral3} size={SIZES.icon} style={{ position: 'absolute', right: SIZES.padding5 }} />
        </View>
      </View>
      <Separator />
    </View>
  );
}

export default Search;
