import {
  StyleSheet, Text, View, Dimensions, ScrollView, Switch,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import {
  Header, Separator, TextButton,
} from '../../components';
import {
  COLORS, FONTS, SIZES,
} from '../../constant';
import FocusAwareStatusBar from '../../utils/focusAwareStatusBar';
import Language from '../../service/Language';
import { getDeviceLang } from '../../utils/language/getDeviceLanguage';

function Setting() {
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => {
    i18n.changeLanguage(isEnabled ? 'en' : 'id');
    Language.setLanguage(isEnabled ? 'en' : 'id');
    setIsEnabled((previousState) => !previousState);
  };

  useEffect(() => {
    Language.getLanguage().then((data) => {
      console.log(data);
      if (data == null) {
        setIsEnabled(getDeviceLang() != 'en');
      } else {
        setIsEnabled(data == 'id');
      }
    });
  }, []);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ backgroundColor: COLORS.neutral1 }}
    >
      <View style={{
        flex: 1, paddingTop: 20, marginBottom: SIZES.padding6,
      }}
      >
        <FocusAwareStatusBar barStyle="dark-content" color="white" />
        <Header title={t('settingTitle')} />
        <View style={{ paddingHorizontal: SIZES.padding5 }}>
          <TextButton onPress={() => navigation.navigate('ChangePassword')} icon="key" text={t('goToChangePassword')} />
          <TextButton icon="globe" text={t('changeLanguage')} onPress={toggleSwitch} isSeparate />
          <View style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: SIZES.padding3,
            marginLeft: SIZES.padding5 * 2,
            marginRight: SIZES.padding3,
          }}
          >
            <Text style={[FONTS.titleNormalMedium, {
              color: COLORS.neutral5,
            }]}
            >
              {isEnabled ? t('id') : t('en')}
            </Text>
            <Switch
              trackColor={{ false: COLORS.primaryPurple1, true: COLORS.primaryPurple3 }}
              thumbColor={COLORS.neutral1}
              ios_backgroundColor={COLORS.primaryPurple3}
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
            />
          </View>
          <Separator />
        </View>
      </View>
    </ScrollView>
  );
}

export default Setting;

const styles = StyleSheet.create({
});
