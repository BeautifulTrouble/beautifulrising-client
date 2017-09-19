import { take, call, cancel, put, select,takeLatest } from 'redux-saga/effects';
import { SEND_SUBSCRIPTION, SUBSCRIPTION_COMPLETE, ERROR_SUBSCRIBING, SUBSCRIPTION_ENDPOINT } from './constants';
import { subscriptionComplete, errorSubscribing } from './actions';
// Individual exports for testing
import request from 'utils/request';

export const getContactUs = (state) => state.get('contactUs');
export function* subscribeUser() {
  // getContactUs.get(email);
  const contactUs = yield select(getContactUs);
  const requestURL = `${SUBSCRIPTION_ENDPOINT}&EMAIL=${encodeURIComponent(contactUs.get('email'))}`;

  try {
    // fetchJsonp(requestURL)
    //   .then(function(response) {
    //
    //   })
    const data = yield call(request, requestURL, { mode: 'no-cors'});
    //
    
    // /** LOADING AREA **/
    yield put(subscriptionComplete());

  } catch (err) {

    yield call(put, errorSubscribing(err));
  }
}
export function* waitingForSubscription() {
  // See example in containers/HomePage/sagas.js

  const action = yield takeLatest(SEND_SUBSCRIPTION, subscribeUser);
  // // const sel = yield select('email');
  // yield ();

}

// All sagas to be loaded
export default [
  waitingForSubscription
];
