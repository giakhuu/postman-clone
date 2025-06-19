import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@/locales/en';
import vi from '@/locales/vi';

const resources = {
  en,
  vi,
};

const namespaces = Object.keys(en); 
i18n
  .use(initReactI18next)
  .init({
    resources,
    ns: namespaces,
    defaultNS: 'home',
    lng: 'en',
    fallbackLng: 'vi',
    interpolation: { escapeValue: false },
  });

export default i18n;
