/*
 *
 * LanguageProvider actions
 *
 */

import {
  CHANGE_LOCALE,
  LOAD_LANGUAGE,
  LOADING_LANGUAGE_COMPLETE,
  LOADING_LANGUAGE_ERROR
} from './constants';

export function changeLocale(languageLocale) {

  return {
    type: CHANGE_LOCALE,
    locale: languageLocale,
  };
}

export function loadLanguage() {

  return {
    type: LOAD_LANGUAGE
  };
}

export function loadingLanguageComplete(data) {
  return {
    type: LOADING_LANGUAGE_COMPLETE,
    data
  };
}

export function loadingLanguageError(err) {
  return {
    type: LOADING_LANGUAGE_ERROR,
    error: err
  };
}
