/*
 *
 * WhatsHappening reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_WHATSHAPPENING,
  LOADING_WHATSHAPPENING_COMPLETE,
  LOADING_WHATSHAPPENING_ERROR
} from './constants';

const initialState = fromJS({
  data: null,
  loading: false,
  complete: false,
  error: false
});

function whatsHappeningReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case LOAD_WHATSHAPPENING:

      return state
              .set('loading', true)
              .set('complete', false)
              .set('error', false);
    case LOADING_WHATSHAPPENING_COMPLETE:

      return state.set('data', action.data)
                .set('complete', true)
                .set('loading', false)
                .set('error', false)

    case LOADING_WHATSHAPPENING_ERROR:

      return state.set('data', null)
                .set('loading', false)
                .set('complete', false)
                .set('error', action.error);
  }
}

export default whatsHappeningReducer;
