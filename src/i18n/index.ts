import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translations from './locales';

void i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: translations,
    fallbackLng: 'pt-BR',
    defaultNS: 'translations',
    detection: {
      order: ['navigator'],
      caches: []
    }
  });

export default i18n;
