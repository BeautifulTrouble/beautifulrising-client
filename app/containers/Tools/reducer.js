/*
 *
 * Tools reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  ADD_TOOL,
  REMOVE_TOOL,
  SET_SHOW_TOOLS,
  SET_VIEW_TYPE,
  NEWS_FEED
} from './constants';

const initialState = fromJS({
  show: false,
  selectedTools: {},
  viewType: NEWS_FEED
});

function toolsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SHOW_TOOLS:
      return state.set('show', action.data);
    case ADD_TOOL:
      return state
              .setIn(['selectedTools', action.slug], action.data);
    case REMOVE_TOOL:
      return state
                .removeIn(['selectedTools', action.slug])
    case SET_VIEW_TYPE:
      return state.set('viewType', action.data);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default toolsReducer;
