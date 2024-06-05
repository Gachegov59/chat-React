import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translations.json';
import ruTranslations from './locales/ru/translations.json';
import iwTranslations from './locales/iw/translations.json';

const resources = {
  en: {
    translation: enTranslations,
  },
  ru: {
    translation: ruTranslations,
  },
  iw: {
    translation: iwTranslations,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: 'en', // Fallback language if a translation is missing
  });

export default i18n;
