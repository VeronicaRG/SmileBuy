import { INITIAL_LANGUAGE } from '@src/utils/constants';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import es from './locales/es.json';
import ptBR from './locales/pt-BR.json';

i18n.use(initReactI18next).init({
  fallbackLng: [INITIAL_LANGUAGE],
  lng: INITIAL_LANGUAGE,
  debug: false,
  resources: {
    ['pt-BR']: ptBR,
    en,
    es,
  },
});
