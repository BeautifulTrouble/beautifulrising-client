/*
 *
 * ToolPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  REAL_WORLD_EXAMPLE,
  CONTRIBUTED_BY,
  LEARN_MORE,
  SET_CHOSEN_SECTION,
  RESET_TOOL_STATE,
  SET_EXPAND_ALL
} from './constants';

const initialState = fromJS({
  expandAll: false,
  chosenSection: REAL_WORLD_EXAMPLE,
});

function toolPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case RESET_TOOL_STATE:
      return initialState;
    case SET_CHOSEN_SECTION:
      return state.set('chosenSection', action.chosenSection);
    case SET_EXPAND_ALL:
      return state.set('expandAll', action.isExpandAll);
    default:
      return state;
  }
}

export default toolPageReducer;
