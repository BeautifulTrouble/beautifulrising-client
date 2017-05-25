/*
 *
 * Tools reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SET_SHOW_TOOLS
} from './constants';

const initialState = fromJS({
  show: false
});

function toolsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SHOW_TOOLS:
      return state.set('show', action.data);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default toolsReducer;
