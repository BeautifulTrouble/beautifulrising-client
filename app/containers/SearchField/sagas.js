import { take, call, put, select, takeLatest } from 'redux-saga/effects';

import { changeToolView } from 'containers/ToolsViewOptions/actions';
import { LIST_VIEW } from 'containers/ToolsViewOptions/constants';
import { SEARCH_FIELD_CHANGED } from './constants';
// automatically switch to list view when searching
export function* switchToListView() {
  // yield put(changeToolView(LIST_VIEW));
}
// Individual exports for testing
export function* listenForSearch() {
  //IF a user searches, switch to list
  // yield takeLatest(SEARCH_FIELD_CHANGED, switchToListView);
}

// All sagas to be loaded
export default [
  listenForSearch,
];
