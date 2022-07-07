import i18n from 'i18next';
import { I18nManager } from 'react-native';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import id from './id.json';
import Language from '../../service/Language';
import { USER_LANG, getDeviceLang } from './getDeviceLanguage';

const languageDetector = {
  init: Function.prototype,
  type: 'languageDetector',
  async: true, // flags below detection to be async
  detect: async (callback) => {
    const userLang = await Language.getLanguage();

    const deviceLang = userLang || getDeviceLang();
    callback(deviceLang);
  },
  cacheUserLanguage: () => {},
};

export const initI18n = () => {
  i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
      compatibilityJSON: 'v3',
      // lng: 'id',
      fallbackLng: 'id',
      resources: {
        id,
        en,
      },
      interpolation: {
        escapeValue: false,
      },
    });
};

export default initI18n;
