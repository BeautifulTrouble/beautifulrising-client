/*
 *
 * AskTheContributor reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  CONTRIB_QUESTION_ASKED,
  CONTRIB_QUESTION_SENT,
  CONTRIB_QUESTION_ERROR
} from './constants';

const initialState = fromJS({
  email: null,
  question: null,
  isSending: false,
  successful: false,
  error: false
});

function askTheContributorReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CONTRIB_QUESTION_ASKED:
      return state
              .set('email', action.data.email)
              .set('question', action.data.question)
              .set('isSending', true)
              .set('successful', false)
              .set('error', false);
    case CONTRIB_QUESTION_SENT:
      return state
              .set('isSending', false)
              .set('successful', true)
              .set('error', false);
    case CONTRIB_QUESTION_ERROR:
      return state
              .set('isSending', false)
              .set('successful', false)
              .set('error', true);
    default:
      return state;
  }
}

export default askTheContributorReducer;
