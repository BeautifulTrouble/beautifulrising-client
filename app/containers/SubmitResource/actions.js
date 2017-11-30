/*
 *
 * SubmitRealWorldExample actions
 *
 */

import {
  DEFAULT_ACTION,
  SUBMIT_RESOURCE,
  SUBMISSION_COMPLETE,
  SUBMISSION_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function submitResource({url, title, description, captcha }) {

  return {
    type: SUBMIT_RESOURCE,
    data: { url, title, description, captcha }
  }
}

export function successfulSubmission() {
  return {
    type: SUBMISSION_COMPLETE
  }
}

export function submissionError() {
  return {
    type: SUBMISSION_ERROR
  }
}
