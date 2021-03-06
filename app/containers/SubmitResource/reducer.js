/*
 *
 * SubmitRealWorldExample reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SUBMIT_RESOURCE,
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

function submitResourceReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case SUBMIT_RESOURCE:
      return state
            .set('url', action.data.url)
            .set('title', action.data.title)
            .set('description', action.data.description)
            .set('captcha', action.data.captcha)
            .set('submitting', true)
            .set('error', false)
            .set('complete', false);
    case SUBMISSION_COMPLETE:
      return state.set('complete', true)
                .set('submitting', false)
                .set('error', false);
    case SUBMISSION_ERROR:
      return state
        .set('complete', true)
        .set('submitting', false)
        .set('error', true);
    default:
      return state;
  }
}

export default submitResourceReducer;
