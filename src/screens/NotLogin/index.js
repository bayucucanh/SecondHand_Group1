import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { COLORS, SIZES, FONTS } from '../../constant';
import { LoginImage } from '../../assets';

function NotLogin({ navigation }) {
  const { t, i18n } = useTranslation();

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      width: SIZES.width,
      alignItems: 'center',
      backgroundColor: COLORS.white,
    }}
    >
      <LoginImage width={SIZES.width * 0.8} height={SIZES.width * 0.5} />
      <View style={styles.goToLogin}>
        <Text style={{
          ...FONTS.bodyLargeRegular, color: COLORS.neutral5, marginRight: 5, textAlign: 'center',
        }}
        >
          {t('notLogin')}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={{ ...FONTS.bodyNormalBold, color: COLORS.primaryPurple4 }}>
            {t('goToLogin')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default NotLogin;

const styles = StyleSheet.create({
  goToLogin: {
    paddingVertical: SIZES.padding4,
    flexDirection: 'column',
    alignItems: 'center',
    width: '70%',
    justifyContent: 'center',
  },
});
