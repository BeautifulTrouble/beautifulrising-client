/*
 *
 * SubmitNewsFeed reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  SUBMIT_HASHTAG,
  SUBMIT_HASHTAG_SUCCESS,
  SUBMIT_HASHTAG_FAIL
} from './constants';

const initialState = fromJS({
  hashtag: null,
  captcha: null,
  submitting: false,
  error: false,
  complete: false
});

function submitNewsFeedReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_HASHTAG:
      return state
              .set('submitting', true)
              .set('captcha', action.data.captcha)
              .set('hashtag', action.data.hashtag);
    case SUBMIT_HASHTAG_SUCCESS:
      return state.set('submitting', false)
              .set('complete', true);
    case SUBMIT_HASHTAG_FAIL:
      return state
              .set('error', true)
              .set('submitting', false);
    default:
      return state;
  }
}

export default submitNewsFeedReducer;
