// import { take, call, put, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOAD_DATA } from 'containers/App/constants';
import { CHANGE_LOCALE } from 'containers/LanguageProvider/constants';
import { dataLoaded, dataLoadingError } from 'containers/App/actions';
import { resetToolState } from 'containers/ToolPage/actions';
import request, { getEndpoint } from 'utils/request';

export const getLanguage = (state) => state.get('language');

export function* getToolsData(lang) {
  const requestURL = getEndpoint(lang);

  try {

    const data = yield call(request, requestURL);
    /** LOADING AREA **/
    yield put(dataLoaded(data));

  } catch (err) {
    yield call(put, dataLoadingError(err));
  }
}

export function* resetState() {
  yield put(resetToolState());
}

// Individual exports for testing
export function* checkLocaleChange() {

  yield put(resetToolState());
  yield take(LOCATION_CHANGE);


}

// All sagas to be loaded
export default [
  checkLocaleChange,
];
