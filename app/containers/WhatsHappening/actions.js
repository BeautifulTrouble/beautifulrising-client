/*
 *
 * TranslatableStaticText actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_WHATSHAPPENING,
  LOADING_WHATSHAPPENING_COMPLETE,
  LOADING_WHATSHAPPENING_ERROR
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadWhatsHappening() {

  return {
    type: LOAD_WHATSHAPPENING
  };
}

export function loadingWhatsHappeningComplete(data) {
  return {
    type: LOADING_WHATSHAPPENING_COMPLETE,
    data
  };
}

export function loadingWhatsHappeningError(err) {
  return {
    type: LOADING_WHATSHAPPENING_ERROR,
    error: err
  };
}
