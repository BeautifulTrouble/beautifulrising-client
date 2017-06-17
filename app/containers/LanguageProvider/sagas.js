import { take, call, cancel, put, select,takeLatest } from 'redux-saga/effects';
import { LOAD_LANGUAGE,
  LOADING_LANGUAGE_COMPLETE,
  LOADING_LANGUAGE_ERROR,
  CHANGE_LOCALE
 } from './constants';
import { loadingLanguageComplete, loadingLanguageError } from './actions';
// Individual exports for testing
import request from 'utils/request';

export const getLanguage = (state) => state.get('language');

export function* loadLanguageItem() {
  // getContactUs.get(email);


  const language = yield select(getLanguage);

  console.log("3", language);
  const requestURL = `https://api.beautifulrising.org/api/v1/text/ui?lang=${language.get('locale')}`;

  console.log("4", requestURL);
  try {
    const data = yield call(request, requestURL);

    console.log("5", data);
    /** LOADING AREA **/
    yield put(loadingLanguageComplete(data));

    console.log("6")
  } catch (err) {
    yield call(put, loadingLanguageError(err));
    console.log("7")
  }
}
export function* initialLoadingCall() {
  // See example in containers/HomePage/sagas.js

  console.log("1");
  const action = yield takeLatest(LOAD_LANGUAGE, loadLanguageItem);
  console.log("2");
  // yield take(CHANGE_LOCALE);
  // console.log("ACTION CANCELLING")
  // yield cancel(action);
  // // const sel = yield select('email');
  // yield ();

}

export function* languageChanged() {
  console.log("XXX#");
  const action = yield yield takeLatest(CHANGE_LOCALE, loadLanguageItem);
  console.log("XXX");
  // yield take(CHANGE_LOCALE);
}

// All sagas to be loaded
export default [
  initialLoadingCall,
  languageChanged
];
