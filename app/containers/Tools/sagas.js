import { LOCATION_CHANGE } from 'react-router-redux';
import {takeLatest, take, call, put, select } from 'redux-saga/effects';
import { setShowTools } from './actions'

export function* closeToolsList() {

  yield put(setShowTools(false));
}

// This will hide the tools area the page
// when the user changes a page if at all...
export function* listenToPageChange() {
  yield takeLatest(LOCATION_CHANGE, closeToolsList);
  
}

// All sagas to be loaded
export default [
  listenToPageChange,
];
