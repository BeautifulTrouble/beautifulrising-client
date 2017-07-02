import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { SUBMIT_HASHTAG } from './constants';
import { hashtagSubmissionSuccess, hashtagSubmissionFailure } from './actions';
import request from 'utils/request';

// Individual exports for testing

export const getSubmitNewsFeed = (state) => state.get('submitNewsFeed');

export function* submitHashtag() {
  const hashtagSubmit = yield select(getSubmitNewsFeed);
  const hashtag = hashtagSubmit.get('hashtag');
  const captcha = hashtagSubmit.get('captcha');

  console.log("Submitted!! ", hashtag, captcha)

  try {
    const requestUrl = `https://api.beautifulrising.org/intake/newsfeed-suggestion`;
    const options = {
      method: "POST",
      mode: 'no-cors',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
          'g-recaptcha-response': captcha,
          'hashtag': hashtag
        }
      )
    };

    console.log("SUBMITTED", requestUrl, options);
    //TODO Insert request call here
    const data = yield put( request( requestUrl, options ) )

    yield put(hashtagSubmissionSuccess());

  } catch(e) {
    console.log("Error ::: ", e);
    hashtagSubmissionFailure(e);
  }


}
export function* listenForHashtagSubmissions() {
  console.log("WAITING FOR HASHTAG TO BE SUBMITTED");
  yield takeLatest(SUBMIT_HASHTAG, submitHashtag);
}

// All sagas to be loaded
export default [
  listenForHashtagSubmissions,
];
