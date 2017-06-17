/*
 *
 * EmailTools reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  REQUEST_EMAIL,
  EMAIL_COMPLETE,
  ERROR_SENDING_EMAIL,
  EMAIL_CLEAR_ALL
} from './constants';

const initialState = fromJS({
  email: '',
  sendingEmail: false,
  complete: false,
  error: false
});

function emailToolsReducer(state = initialState, action) {
  console.log(state)
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case REQUEST_EMAIL:
      console.log("1", action);
      return state.set('email', action.data.email)
              .set('sendingEmail', true)
              .set('complete', false)
              .set('error', false);
    case EMAIL_COMPLETE:
      return state.set('email', null)
              .set('sendingEmail', false)
              .set('complete', true)
              .set('error', false);
    case ERROR_SENDING_EMAIL:
      return state.set('email', null)
              .set('sendingEmail', false)
              .set('complete', false)
              .set('error', true);
    case EMAIL_CLEAR_ALL:
      return state.set('email', null)
              .set('sendingEmail', false)
              .set('complete', false)
              .set('error', false);
    default:
      return state;
  }
}

export default emailToolsReducer;
