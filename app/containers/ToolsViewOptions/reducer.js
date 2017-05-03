/*
 *
 * ToolsViewOptions reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CHANGE_TOOL_VIEW,
  BLOCK_VIEW
} from './constants';

const initialState = fromJS({
  chosen: BLOCK_VIEW, //DEFAULT == block / LISTVIEW = list
});

function toolsViewOptionsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TOOL_VIEW:
      return state.setIn(['chosen'], action.view);
    default:
      return state;
  }
}

export default toolsViewOptionsReducer;
