// import { take, call, put, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOAD_DATA } from 'containers/App/constants';
import { dataLoaded, dataLoadingError } from 'containers/App/actions';

import request from 'utils/request';


export function* getData() {
  const requestURL = `https://api.beautifulrising.org/api/v1/all?lang=en`;

  try {
    console.log("Loading Data...");
    const data = yield call(request, requestURL);
    /** LOADING AREA **/
    console.log("Data loaded!", data);
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
  const watcher = yield takeLatest(LOAD_DATA, getData);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);

}

// All sagas to be loaded
export default [
  beautifulRisingData,
];
