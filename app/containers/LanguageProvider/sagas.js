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


  const requestURL = `https://api.beautifulrising.org/api/v1/text/ui?lang=${language.get('locale')}`;


  try {
    const data = yield call(request, requestURL);


    /** LOADING AREA **/
    yield put(loadingLanguageComplete(data));


  } catch (err) {
    yield call(put, loadingLanguageError(err));

  }
}
export function* initialLoadingCall() {
  // See example in containers/HomePage/sagas.js


  const action = yield takeLatest(LOAD_LANGUAGE, loadLanguageItem);

  // yield take(CHANGE_LOCALE);
  //
  // yield cancel(action);
  // // const sel = yield select('email');
  // yield ();

}

export function* languageChanged() {

  const action = yield yield takeLatest(CHANGE_LOCALE, loadLanguageItem);

  // yield take(CHANGE_LOCALE);
}

// All sagas to be loaded
export default [
  initialLoadingCall,
  languageChanged
];
