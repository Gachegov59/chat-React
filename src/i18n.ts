import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

//todo: implement in backend
// src/loadResources.ts
export async function loadResources() {
  const resources = {
    en: {
      translation: await import('./locales/en/translations.json'),
    },
    ru: {
      translation: await import('./locales/ru/translations.json'),
    },
    iw: {
      translation: await import('./locales/iw/translations.json'),
    },
  };
  return resources;
}


async function initializeI18n() {
  const resources = await loadResources();

  i18n
    .use(HttpApi)
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en',
      debug: true,
      interpolation: {
        escapeValue: false,
      },
      // backend: {
      //   loadPath: "/locales/{{lng}}/{{ns}}.json",
      // },
    });
}

initializeI18n();

export default i18n;
