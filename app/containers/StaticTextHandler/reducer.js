/*
 *
 * StaticTextHandler reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOAD_STATIC_TEXT,
  LOAD_STATIC_TEXT_SUCCESS,
  LOAD_STATIC_TEXT_ERROR
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  staticText: false,
});

function staticTextHandlerReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_STATIC_TEXT:
      return state
              .set('loading', true)
              .set('error', false);
    case LOAD_STATIC_TEXT_SUCCESS:
      return state
              .set('staticText', action)
              .set('loading', false)
              .set('error', false);
    case LOAD_STATIC_TEXT_ERROR:
      return state
              .set('error', true)
              .set('loading', false);
    default:
      return state;
  }
}

export default staticTextHandlerReducer;
