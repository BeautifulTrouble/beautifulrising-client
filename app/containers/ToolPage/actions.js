/*
 *
 * ToolPage actions
 *
 */

import {
  DEFAULT_ACTION,
  RESET_TOOL_STATE,
  SET_CHOSEN_SECTION,
  SET_EXPAND_ALL
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setExpandAll(isExpandAll) {
  return {
    type: SET_EXPAND_ALL,
    isExpandAll
  }
}

export function setChosenSection(chosenSection) {
    return {
      type: SET_CHOSEN_SECTION,
      chosenSection
    }
}

export function resetToolState() {
  return {
    type: RESET_TOOL_STATE
  }
}
