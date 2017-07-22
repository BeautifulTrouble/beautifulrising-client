/*
 *
 * TranslatableStaticText reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_LANGUAGE,
  LOADING_LANGUAGE_COMPLETE,
  LOADING_LANGUAGE_ERROR
} from './constants';

const initialState = fromJS({
  data: null,
  loading: false,
  complete: false,
  error: false
});

function translatableStaticTextReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case LOAD_LANGUAGE:
      console.log("Loading Language", action);
      return state
              .set('loading', true)
              .set('complete', false)
              .set('error', false);
    case LOADING_LANGUAGE_COMPLETE:
      console.log("Language Loaded", action);
      return state.set('data', action.data)
                .set('complete', true)
                .set('loading', false)
                .set('error', false)
    case LOADING_LANGUAGE_ERROR:
    console.log("Language Loaded Error", action);
      return state.set('data', null)
                .set('loading', false)
                .set('complete', false)
                .set('error', action.error);
    default:
      return state;
  }
}

export default translatableStaticTextReducer;
