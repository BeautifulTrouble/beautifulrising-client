import { take, call, put, select, takeLatest } from 'redux-saga/effects';

import { CONTRIB_QUESTION_ASKED, CONTRIB_QUESTION_SENT, CONTRIB_QUESTION_ERROR } from './constants';
import { contributorQuestionSent, contributorQuestionError } from './actions';
// Individual exports for testing

import request from 'utils/request';

export const getAskContributor = (state) => state.get('askTheContributor');

export function* submitQuestion() {
  const askContributor = yield select(getAskContributor);
  const authors = askContributor.get('authors');
  const captcha = askContributor.get('captcha');
  const email = askContributor.get('email');
  const question = askContributor.get('question');

  try {
    const requestUrl = `https://api.beautifulrising.org/intake/contributor-question`;
    const options = {
      method: "POST",
      mode: 'no-cors',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'g-recaptcha-response': captcha,
          'contributors': authors,
          'question': `${question} - ${email}`,
          'g-recaptcha-version': 'v2'
        }
      )
    };
    //TODO Insert request call here
    const data = yield call(request, requestUrl, options )

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
