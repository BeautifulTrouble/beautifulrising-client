/*
 *
 * Tags reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  tags: [
    'capitalism',
    'colonialism',
    'corruption',
    'democracy',
    'dictatorship',
    'elections',
  ],
});

function tagsReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default tagsReducer;
