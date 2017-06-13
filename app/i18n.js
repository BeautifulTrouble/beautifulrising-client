/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import esLocaleData from 'react-intl/locale-data/es';
import frLocaleData from 'react-intl/locale-data/fr';
import arLocaleData from 'react-intl/locale-data/ar';

import { DEFAULT_LOCALE } from './containers/App/constants'; // eslint-disable-line
import enTranslationMessages from './translations/en.json';
import esTranslationMessages from './translations/es.json';
import frTranslationMessages from './translations/fr.json';
import arTranslationMessages from './translations/ar.json';

export const appLocales = [
  'en',
  'es',
  'fr',
  'ar',
];

addLocaleData(enLocaleData);
addLocaleData(esLocaleData);
addLocaleData(frLocaleData);
addLocaleData(arLocaleData);

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    let message = messages[key];
    if (!message && locale !== DEFAULT_LOCALE) {
      message = defaultFormattedMessages[key];
    }
    return Object.assign(formattedMessages, { [key]: message });
  }, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  es: formatTranslationMessages('es', esTranslationMessages),
  fr: formatTranslationMessages('fr', frTranslationMessages),
  ar: formatTranslationMessages('ar', arTranslationMessages),
};
