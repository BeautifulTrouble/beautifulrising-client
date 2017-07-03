import {takeLatest, take, call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga'
import { emailModulesComplete, emailModulesError, emailClearAll} from './actions';
import { REQUEST_EMAIL, EMAIL_CLEAR_ALL } from './constants';

import request from 'utils/request';

const getUserEmail = (state) => state.get('emailTools');
const getTools = (state) => state.get('tools');
const getLanguage = (state) => state.get('language');

export function* sendModulesToEmail() {
  const emailTools = yield select(getUserEmail);
  const tools = yield select(getTools);
  const language = yield select(getLanguage);

  const userEmail = emailTools.get('email');
  const selectedTools = tools.get('selectedTools');
  const locale = language.get('locale');

  const toolsValue = selectedTools.map(item=>item.slug).join(',');

  const requestURL = `https://api.beautifulrising.org/pdf/email?tools=${encodeURIComponent(toolsValue)}&lang=${encodeURIComponent(locale)}&address=${encodeURIComponent(userEmail)}`;

  try {
    const data = yield call(request, requestURL);
    yield put(emailModulesComplete());

    yield delay(3000);
    yield put(emailClearAll());
  } catch (e) {
    yield call(put, emailModulesError());
  }



}
// Individual exports for testing
export function* listenEmailModules() {
  // See example in containers/HomePage/sagas.js
  yield takeLatest(REQUEST_EMAIL, sendModulesToEmail);
}

// This will hide the tools area the page
// when the user changes a page if at all...
export function* listenToPageChange() {

}

// All sagas to be loaded
export default [
  listenEmailModules,
];
