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
  const options = {
    method: "POST",
    mode: 'no-cors',
    header: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'g-recaptcha-response': captcha,
      'document_title': documentTitle,
      'document_link': documentLink,
      'title': title,
      'link': url,
      'description': description,
      'g-recaptcha-version': 'v2'
    })
  };


  try {
    const requestUrl = `https://api.beautifulrising.org/intake/real-world-example`;
    yield put(request(requestUrl, options));
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
