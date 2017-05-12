/*
 *
 * SearchField actions
 *
 */

import {
  DEFAULT_ACTION,
  SEARCH_FIELD_CHANGED
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function searchFieldChanged(text) {
  return {
    type: SEARCH_FIELD_CHANGED,
    text
  }
}
