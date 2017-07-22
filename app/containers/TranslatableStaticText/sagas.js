import { take, call, cancel, put, select,takeLatest } from 'redux-saga/effects';
import { LOAD_LANGUAGE,
  LOADING_LANGUAGE_COMPLETE,
  LOADING_LANGUAGE_ERROR
 } from './constants';

 import { CHANGE_LOCALE } from 'containers/LanguageProvider/constants';
import { loadingLanguageComplete, loadingLanguageError } from './actions';
// Individual exports for testing
import request from 'utils/request';

export const getLanguage = (state) => state.get('language');
export const getTranslatableStaticText = (state) => state.get('translatableStaticText');

export function* loadLanguageItem() {
  // getContactUs.get(email);
    console.log("XXXX");


  const language = yield select(getLanguage);


  const requestURL = `https://api.beautifulrising.org/api/v1/text/ui?lang=${language.get('locale')}`;
  console.log("Loading Via TranslatableStaticText", requestURL);

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

  console.log("XXXX", LOAD_LANGUAGE);
  const action = yield takeLatest(LOAD_LANGUAGE, loadLanguageItem);
  console.log("XXXX", action);
  // yield take(CHANGE_LOCALE);
  //
  // yield cancel(action);
  // // const sel = yield select('email');
  // yield ();
}

export function* languageChanged() {

  console.log("XXXX", CHANGE_LOCALE);
  const action = yield takeLatest(CHANGE_LOCALE, loadLanguageItem);
  console.log("XXXX");
  // yield take(CHANGE_LOCALE);
}

// All sagas to be loaded
export default [
  languageChanged,
  initialLoadingCall
];
