/*
 *
 * SubmitNewsFeed actions
 *
 */

import {
  DEFAULT_ACTION,
  SUBMIT_HASHTAG,
  SUBMIT_HASHTAG_SUCCESS,
  SUBMIT_HASHTAG_FAIL
} from './constants';

export function submitHashtag({ hashtag, captcha }) {
  console.log("XXX submit Hashtag", hashtag, captcha)
  return {
    type: SUBMIT_HASHTAG,
    data: { hashtag, captcha }
  }
}

export function hashtagSubmissionSuccess() {
  return {
    type: SUBMIT_HASHTAG_SUCCESS
  }
}

export function hashtagSubmissionFailure() {
  return {
    type: SUBMIT_HASHTAG_FAIL
  };
}
export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
