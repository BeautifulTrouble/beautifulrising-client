// import { take, call, put, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOAD_DATA, LANGUAGE_CHANGE_RELOAD_DATA } from 'containers/App/constants';
import { CHANGE_LOCALE } from 'containers/LanguageProvider/constants';
import { dataLoaded, dataLoadingError } from 'containers/App/actions';

import request from 'utils/request';

export const getLanguage = (state) => state.get('language');

export function* getData(lang) {
  const requestURL = `https://api.beautifulrising.org/api/v1/all?lang=${lang}`;
  console.log(requestURL);
  try {

    const data = yield call(request, requestURL);
    /** LOADING AREA **/
    yield put(dataLoaded(data));

  } catch (err) {
    yield call(put, dataLoadingError(err));
  }
}

// Individual exports for testing
export function* beautifulRisingData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution

  console.log("CALLED THIS");
  let language = yield select(getLanguage);
  console.log("CALLED THIS", language);
  const chosenLanguage = language !== undefined ? language.get('locale') : 'en';
  console.log("CALLED THIS", chosenLanguage);
  const watcher = yield takeLatest(LOAD_DATA, getData, chosenLanguage);
  yield take(CHANGE_LOCALE);
  console.log("CANCELLED YIELD")
  yield cancel(watcher);
}

export function* langaugeChangeData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  console.log("LANGUAGE CHANGED")
  let language = yield select(getLanguage);
  const chosenLanguage = language !== undefined ? language.get('locale') : 'en';
  const watcher = yield takeLatest(LANGUAGE_CHANGE_RELOAD_DATA, getData, chosenLanguage);
  yield take(CHANGE_LOCALE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  beautifulRisingData,
];
