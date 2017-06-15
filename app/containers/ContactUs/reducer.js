/*
 *
 * ContactUs reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({});

function contactUsReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_SUBSCRIPTION:
      return state;
    case SUBSCRIPTION_SENDING:
      return state;
    case SUBSCRIPTION_COMPLETE:
      return state;
    case ERROR_SUBSCRIBING:
      return state;
    default:
      return state;
  }
}

export default contactUsReducer;
