/*
 *
 * ToolsViewOptions actions
 *
 */

import {
  DEFAULT_ACTION,
  CHANGE_TOOL_VIEW,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeToolView(view) {
  return {
    type: CHANGE_TOOL_VIEW,
    view
  }
}
