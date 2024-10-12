import enUsTranslations from './en-us';
import ptBrTranslations from './pt-br';

export type Translations = typeof enUsTranslations;

export const i18nTranslations: {
  'pt-BR': Translations;
  'en-US': Translations;
} = {
  'pt-BR': ptBrTranslations,
  'en-US': enUsTranslations,
};

export default i18nTranslations;
