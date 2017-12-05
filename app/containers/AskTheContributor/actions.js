/*
 *
 * AskTheContributor actions
 *
 */

import {
  DEFAULT_ACTION,
  CONTRIB_QUESTION_ASKED,
  CONTRIB_QUESTION_SENT,
  CONTRIB_QUESTION_ERROR
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function askContributorQuestion({captcha, authors, email, question}) {
  
  return {
    type: CONTRIB_QUESTION_ASKED,
    data: { email, question, captcha, authors }
  }
}

export function contributorQuestionSent() {
  return {
    type: CONTRIB_QUESTION_SENT
  }
}

export function contributorQuestionError(error) {
  return {
    type: CONTRIB_QUESTION_ERROR,
    error: error
  }
}
