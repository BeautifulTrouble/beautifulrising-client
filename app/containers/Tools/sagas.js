import { LOCATION_CHANGE } from 'react-router-redux';
import {takeLatest, take, call, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { setShowTools , setMobileShowTools, setViewType, showToolsForOnboarding, hideToolsAfterOnboarded} from './actions'
import { ADD_TOOL, MY_TOOLS } from './constants';

export const getTools = (state) => state.get('tools');

export function* closeToolsList() {
  yield put(setShowTools(false));
  yield put(setMobileShowTools(false));
}

// This will hide the tools area the page
// when the user changes a page if at all...
export function* listenToPageChange() {
  yield takeLatest(LOCATION_CHANGE, closeToolsList);
}

// This one opens and closes the Tools area for onboarding
export function* checkIfOnboarding() {
  const tools = yield select(getTools)
  //
  if (tools.get('selectedTools').size === 1) {
    yield put(setViewType(MY_TOOLS));
    yield put(showToolsForOnboarding());
    yield delay(2000);
    yield put(hideToolsAfterOnboarded());
  }
}

export function* listenToToolsBeingAdded() {
  yield takeLatest(ADD_TOOL, checkIfOnboarding);
}

// All sagas to be loaded
export default [
  listenToPageChange,
  listenToToolsBeingAdded
];
