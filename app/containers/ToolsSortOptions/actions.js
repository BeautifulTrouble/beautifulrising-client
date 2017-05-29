/*
 *
 * ToolsSortOptions actions
 *
 */

import {
  DEFAULT_ACTION,
  CHANGE_SORT_OPTION
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeSortOption(sortOption) {
  return {
    type: CHANGE_SORT_OPTION,
    data: sortOption
  }
}
