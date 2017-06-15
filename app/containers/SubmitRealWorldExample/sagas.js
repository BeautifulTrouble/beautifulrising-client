import { take, call, put, select } from 'redux-saga/effects';

import { SUBMIT_EXAMPLE, SUBMISSION_COMPLETE, SUBMISSION_ERROR } from './constants';
import { successfulSubmission, submissionError } from './action';
// Individual exports for testing

import request from 'utils/request';

export const getSubmitExample = (state) => state.get('submitRealWorldExample');

export function* submitExample() {
  const submitExample = yield select(getSubmitExample);
  const url = submitExample.get('url');
  const title = submitExample.get('title');
  const description = submitExample.get('description');

  try {
    const requestUrl = `?url=${url}&title=${title}&description=${description}`;
    console.log(requestUrl);

    yield put(successfulSubmission());
  } catch(e) {
    yield call(put, submissionError(e))
  }
}
export function* listenForSubmissions() {
  yield takeLatest(SUBMIT_EXAMPLE, submitExample);
}

// All sagas to be loaded
export default [
  listenForSubmissions,
];
