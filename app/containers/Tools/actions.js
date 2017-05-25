/*
 *
 * Tools actions
 *
 */

import {
  SET_SHOW_TOOLS,
  DEFAULT_ACTION,
} from './constants';

export function setShowTools(showTools) {
  return {
    type: SET_SHOW_TOOLS,
    data: showTools
  }
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
