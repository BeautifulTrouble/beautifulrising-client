/*
 *
 * TranslatableStaticText actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_LANGUAGE,
  LOADING_LANGUAGE_COMPLETE,
  LOADING_LANGUAGE_ERROR
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
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
