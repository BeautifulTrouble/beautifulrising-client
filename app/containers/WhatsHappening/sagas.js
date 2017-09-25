import { take, race, call, cancel, put, select,takeLatest } from 'redux-saga/effects';
import { LOAD_WHATSHAPPENING,
  LOADING_WHATSHAPPENING_COMPLETE,
  LOADING_WHATSHAPPENING_ERROR
 } from './constants';

 import { CHANGE_LOCALE } from 'containers/LanguageProvider/constants';
import { loadWhatsHappening, loadingWhatsHappeningComplete, loadingWhatsHappeningError } from './actions';
// Individual exports for testing
import request from 'utils/request';

export const getLanguage = (state) => state.get('language');
export const getWhatsHappening = (state) => state.get('whatsHappening');

let timeoutHandler = null;
// Utility function to delay effects
function delay(millis) {

    const promise = new Promise(resolve => {
        if (timeoutHandler) {
          clearTimeout(timeoutHandler);
        }

        timeoutHandler = setTimeout(() => resolve(true), millis)
    });
    return promise;
}

// Fetch data every 20 seconds
function* pollData() {
    try {
        yield call(delay, 10000);
        yield put(loadWhatsHappening());
    } catch (error) {
        // cancellation error -- can handle this if you wish
        return;
    }
}

// Wait for successful response, then fire another request
// Cancel polling if user logs out
function* watchPollData() {
    while (true) {
        yield take(LOADING_WHATSHAPPENING_COMPLETE);
        yield race([
            call(pollData)
        ]);
    }
}

export function* retrieveWhatsHappening() {
  // getContactUs.get(email);

  const language = yield select(getLanguage);


  const requestURL = `https://api.beautifulrising.org/api/v1/posts?lang=${language.get('locale')}&orderby=timestamp&reverse=true&limit=100`;

  try {
    const data = yield call(request, requestURL);


    /** LOADING AREA **/
    yield put(loadingWhatsHappeningComplete(data));


  } catch (err) {
    yield call(put, loadingWhatsHappeningError(err));

  }
}
export function* initialLoadingCall() {
  // See example in containers/HomePage/sagas.js


  const action = yield takeLatest(LOAD_WHATSHAPPENING, retrieveWhatsHappening);

  // yield take(CHANGE_LOCALE);
  //
  // yield cancel(action);
  // // const sel = yield select('email');
  // yield ();
}
export function* handleLanguageChange() {

  yield put(loadWhatsHappening());

}

export function* languageChanged() {

  const action = yield takeLatest(CHANGE_LOCALE, handleLanguageChange);

  // yield take(CHANGE_LOCALE);
}

// All sagas to be loaded
// export default [
//   languageChanged,
//   initialLoadingCall
// ];

// Daemonize tasks in parallel
export default [
  languageChanged,
  initialLoadingCall
]
