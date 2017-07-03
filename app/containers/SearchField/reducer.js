/*
 *
 * SearchField reducer
 *
 */

import { fromJS } from 'immutable';
import {

  DEFAULT_ACTION,
  SEARCH_FIELD_CHANGED
} from './constants';

const initialState = fromJS({
  searchField: ''
});

function searchFieldReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_FIELD_CHANGED:
      return state.set('searchField', action.text);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default searchFieldReducer;
