/*
 *
 * SubmitRealWorldExample reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SUBMIT_EXAMPLE,
  SUBMISSION_COMPLETE,
  SUBMISSION_ERROR,
} from './constants';

const initialState = fromJS({
  url: null,
  title: null,
  description: null,
  documentLink: null,
  documentTitle: null,
  captcha: null,
  submitting: false,
  error: false,
  complete: false
});

function submitRealWorldExampleReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SUBMIT_EXAMPLE:
      return state
            .set('url', action.data.url)
            .set('title', action.data.title)
            .set('description', action.data.description)
            .set('captcha', action.data.captcha)
            .set('documentTitle', action.data.documentTitle)
            .set('documentLink', action.data.documentLink)
            .set('submitting', true)
            .set('error', false)
            .set('complete', false);
    case SUBMISSION_COMPLETE:
      return initialState.set('complete', true);
    case SUBMISSION_ERROR:
      return state
        .set('complete', true)
        .set('submitting', false)
        .set('error', true);
    default:
      return state;
  }
}

export default submitRealWorldExampleReducer;
