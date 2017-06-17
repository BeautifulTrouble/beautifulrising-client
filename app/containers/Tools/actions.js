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
  SET_VIEW_TYPE
} from './constants';

export function setShowTools(showTools) {
  return {
    type: SET_SHOW_TOOLS,
    data: showTools
  }
}

export function setViewType(viewType) {
  return {
    type: SET_VIEW_TYPE,
    data: viewType
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
