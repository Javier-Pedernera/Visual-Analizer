import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en-US/translation.json';
import translationES from './locales/es-ES/translation.json';
import translationSV from './locales/sv-SE/translation.json';
import translationPT from './locales/pt-PT/translation.json';

const resources = {
  "en-US": {
    translation: translationEN
  },
  "es-ES": {
    translation: translationES
  },
  "sv-SE": {
    translation: translationSV
  },
  "pt-PT": {
    translation: translationPT,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en-US',
    fallbackLng: ['en-US', 'es-ES', 'pt-PT', 'sv-SE'],
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
