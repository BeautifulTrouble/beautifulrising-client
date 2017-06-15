/*
 *
 * ContactUs reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,

  //status
  STANDING_BY,
  SUBSCRIPTION_SENDING,

  //action type
  SEND_SUBSCRIPTION,
  SUBSCRIPTION_COMPLETE,
  ERROR_SUBSCRIBING,

} from './constants';

const initialState = fromJS({
  email: '',
  subscribing: false,
  error: false,
  complete: false
});

function contactUsReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_SUBSCRIPTION:
      return state
                .set('email', action.data.email)
                .set('subscribing', true)
                .set('complete', false);
    case SUBSCRIPTION_COMPLETE:
      return state
              .set('subscribing', false)
              .set('complete', true)
              .set('error', false);
    case ERROR_SUBSCRIBING:
      return state
              .set('complete', false)
              .set('subscribing', false)
              .set('error', true);
    default:
      return state;
  }
}

export default contactUsReducer;
