// import { take, call, put, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { CHANGE_LOCALE } from 'containers/LanguageProvider/constants';
import { loadStaticText, loadStaticTextstaticTextLoaded, staticTextLoadingError } from './actions';
import { LOAD_STATIC_TEXT } from './constants';

import request from 'utils/request';

export const getLanguage = (state) => state.get('language');
export const getStaticTextHandler = (state) => state.get('staticTextHandler');

export function* getStaticText(lang) {
  const requestURL = `https://api.beautifulrising.org/api/v1/text/ui?lang=${lang}`;
  try {

    const data = yield call(request, requestURL);
    /** LOADING AREA **/
    yield put(staticTextLoaded(data));

  } catch (err) {
    yield call(put, staticTextLoadingError(err));
  }
}

// Individual exports for testing
export function* initializeBRStaticText() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  let staticTextHandler = yield select(getStaticTextHandler);
  
  // If staticText is null, load staticText onthe fly
  if (!staticTextHandler.get('staticText')) {
    
    yield put(loadStaticText());
  }
}

export function* listenForLanguageChange() {
  let language = yield select(getLanguage);
  const chosenLanguage = language !== undefined ? language.get('locale') : 'en';
  
  const watcher = yield takeLatest(LOAD_STATIC_TEXT, getStaticText, chosenLanguage);

  
  yield take(CHANGE_LOCALE);

  
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  listenForLanguageChange,
  initializeBRStaticText,

];
