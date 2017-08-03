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

export function submitResource({url, title, description, captcha, documentLink, documentTitle }) {
  return {
    type: SUBMIT_RESOURCE,
    data: { url, title, description, captcha, documentLink, documentTitle  }
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
