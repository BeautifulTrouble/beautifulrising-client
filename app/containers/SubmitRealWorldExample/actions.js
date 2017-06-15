/*
 *
 * SubmitRealWorldExample actions
 *
 */

import {
  DEFAULT_ACTION,
  SUBMIT_EXAMPLE,
  SUBMISSION_COMPLETE,
  SUBMISSION_ERROR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function submitExample(url, title, description) {
  return {
    type: SUBMIT_EXAMPLE,
    data: { url, title, description }
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
