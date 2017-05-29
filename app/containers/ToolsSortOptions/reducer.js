/*
 *
 * ToolsSortOptions reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CHANGE_SORT_OPTION,
  SORT_NEWEST
} from './constants';

const initialState = fromJS({
  chosen: SORT_NEWEST
});

function toolsSortOptionsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CHANGE_SORT_OPTION:
      return state.set('chosen', action.data)
    default:
      return state;
  }
}

export default toolsSortOptionsReducer;
