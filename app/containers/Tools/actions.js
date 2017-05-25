/*
 *
 * Tools actions
 *
 */

import {
  SET_SHOW_TOOLS,
  ADD_TOOL,
  REMOVE_TOOL,
  DEFAULT_ACTION,
} from './constants';

export function setShowTools(showTools) {
  return {
    type: SET_SHOW_TOOLS,
    data: showTools
  }
}

export function addTool(slug, title, type, snapshot) {
  return {
    type: ADD_TOOL,
    slug,
    data: { title, type, snapshot, slug }
  };
}

export function removeTool(slug) {
  return { type: REMOVE_TOOL, slug };
}

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
