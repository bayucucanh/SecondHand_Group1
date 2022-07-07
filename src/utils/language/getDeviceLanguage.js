import { Platform, NativeModules } from 'react-native';

export const getDeviceLang = () => {
  const appLanguage = Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
        || NativeModules.SettingsManager.settings.AppleLanguages[0]
    : NativeModules.I18nManager.localeIdentifier;

  return appLanguage.search(/-|_/g) !== -1
    ? appLanguage.slice(0, 2)
    : appLanguage;
};

export const USER_LANG = 'user_lang';
