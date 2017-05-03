import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { CHANGE_TOOL_VIEW } from './constants';

// Individual exports for testing
export function* listenForClick() {
  const watch = takeLatest(CHANGE_TOOL_VIEW, changeView);
  // See example in containers/HomePage/sagas.js
}

// All sagas to be loaded
export default [
  listenForClick,
];
