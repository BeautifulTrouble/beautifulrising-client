import { take, call, put, select, takeLatest } from 'redux-saga/effects';

import { SUBMIT_EXAMPLE, SUBMISSION_COMPLETE, SUBMISSION_ERROR } from './constants';
import { successfulSubmission, submissionError } from './actions';
// Individual exports for testing

import request from 'utils/request';

export const getSubmitExample = (state) => state.get('submitRealWorldExample');

export function* submitExample() {
  const submitExample = yield select(getSubmitExample);
  const url = submitExample.get('url');
  const title = submitExample.get('title');
  const description = submitExample.get('description');
  const captcha = submitExample.get('captcha');
  const documentLink = submitExample.get('documentLink');
  const documentTitle = submitExample.get('documentTitle');

  try {
    const requestUrl = `https://api.beautifulrising.org/intake/real-world-example`;
    yield put(request(requrestUrl, {
      method: "POST",
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'g-recaptcha-response': captcha,
        'document_title': documentTitle,
        'document_link': document_link,
        'title': title,
        'link': url,
        'description': description
      })
    }));

    yield put(successfulSubmission());
  } catch(e) {
    yield call(put, submissionError(e))
  }
}
export function* listenForSubmissions() {
  const action = yield takeLatest(SUBMIT_EXAMPLE, submitExample);
}

// All sagas to be loaded
export default [
  listenForSubmissions,
];
