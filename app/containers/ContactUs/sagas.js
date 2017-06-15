import { take, call, cancel, put, select,takeLatest } from 'redux-saga/effects';
import { SEND_SUBSCRIPTION, SUBSCRIPTION_COMPLETE, ERROR_SUBSCRIBING } from './constants';
import { subscriptionComplete, errorSubscribing } from './actions';
// Individual exports for testing
import request from 'utils/request';

export const getContactUs = (state) => state.get('contactUs');
const endpoint = '/&subscribe=Subscribe';
export function* subscribeUser() {
  // getContactUs.get(email);
  const contactUs = yield select(getContactUs);
  const requestURL = `${endpoint}&EMAIL=${encodeURIComponent(contactUs.get('email'))}`;

  try {
    // const data = yield call(request, requestURL);

    /** LOADING AREA **/
    yield put(subscriptionComplete());

  } catch (err) {
    yield call(put, errorSubscribing(err));
  }
}
export function* waitingForSubscription() {
  // See example in containers/HomePage/sagas.js

  const action = yield takeLatest(SEND_SUBSCRIPTION, subscribeUser);
  // console.log("GOT THIS", action);
  // // const sel = yield select('email');
  // yield ();

}

// All sagas to be loaded
export default [
  waitingForSubscription
];
