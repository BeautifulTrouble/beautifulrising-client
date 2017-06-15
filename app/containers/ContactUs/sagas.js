import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing
export function* actionWatcher() {
  // See example in containers/HomePage/sagas.js
  let action;
  while (action = yield take()) {
    console.log('ContactUs ] got action!', action);
  }
}

// All sagas to be loaded
export default [
  actionWatcher,
];
