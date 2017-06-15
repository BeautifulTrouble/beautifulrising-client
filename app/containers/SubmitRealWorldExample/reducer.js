/*
 *
 * SubmitRealWorldExample reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  url: null,
  title: null,
  description: null,
  submitting: false,
  error: false,
  complete: false
});

function submitRealWorldExampleReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default submitRealWorldExampleReducer;
