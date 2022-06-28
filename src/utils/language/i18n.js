import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import id from './id.json';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'id',
  fallbackLng: 'id',
  resources: {
    id,
    en,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
