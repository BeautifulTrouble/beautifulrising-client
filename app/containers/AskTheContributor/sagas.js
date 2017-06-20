import { take, call, put, select, takeLatest } from 'redux-saga/effects';

import { CONTRIB_QUESTION_ASKED, CONTRIB_QUESTION_SENT, CONTRIB_QUESTION_ERROR } from './constants';
import { contributorQuestionSent, contributorQuestionError } from './actions';
// Individual exports for testing

import request from 'utils/request';

export const getAskContributor = (state) => state.get('askTheContributor');

export function* submitQuestion() {
  const askContributor = yield select(getAskContributor);
  const email = askContributor.get('email');
  const question = askContributor.get('question');

  try {
    const requestUrl = `?email=${encodeURIComponent(email)}&question=${encodeURIComponent(question)}`;
    //TODO Insert request call here

    yield put(contributorQuestionSent());
  } catch(e) {
    yield call(put, contributorQuestionError(e))
  }
}
export function* listenForQuestions() {
  const action = yield takeLatest(CONTRIB_QUESTION_ASKED, submitQuestion);
}

// All sagas to be loaded
export default [
  listenForQuestions,
];
