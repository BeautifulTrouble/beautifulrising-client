import { take, call, put, select, takeLatest } from 'redux-saga/effects';

import { SUBMIT_RESOURCE, SUBMISSION_COMPLETE, SUBMISSION_ERROR } from './constants';
import { successfulSubmission, submissionError } from './actions';
// Individual exports for testing

import request from 'utils/request';

export const getSubmitResource = (state) => state.get('submitResource');

export function* submitResource() {
  const submitResource = yield select(getSubmitResource);
  const url = submitResource.get('url');
  const title = submitResource.get('title');
  const description = submitResource.get('description');
  const captcha = submitResource.get('captcha');
  const documentLink = submitResource.get('documentLink');
  const documentTitle = submitResource.get('documentTitle');

  try {
    const requestUrl = `https://api.beautifulrising.org/intake/resource`;
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
  const action = yield takeLatest(SUBMIT_RESOURCE, submitResource);
}

// All sagas to be loaded
export default [
  listenForSubmissions,
];
