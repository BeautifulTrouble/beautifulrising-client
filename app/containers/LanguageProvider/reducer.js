/*
 *
 * LanguageProvider reducer
 *
 */

import { fromJS } from 'immutable';

import {
  CHANGE_LOCALE,
  LOAD_LANGUAGE,
  LOADING_LANGUAGE_COMPLETE,
  LOADING_LANGUAGE_ERROR
} from './constants';
import {
  DEFAULT_LOCALE,
} from '../App/constants'; // eslint-disable-line

const initialState = fromJS({
  locale: DEFAULT_LOCALE,
  data: null,
  loading: false,
  complete: false,
  error: false
});

function languageProviderReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LOCALE:
      return state
        .set('locale', action.locale);
    case LOAD_LANGUAGE:
      return state
              .set('loading', true)
              .set('complete', false)
              .set('error', false);
    case LOADING_LANGUAGE_COMPLETE:
      console.log(action, state, "LANGUAGE")
      return state.set('data', action.data)
                .set('complete', true)
                .set('loading', false)
                .set('error', false)
    case LOADING_LANGUAGE_ERROR:
      console.log(action, state, "LANGUAGE ERROR")
      return state.set('data', null)
                .set('loading', false)
                .set('complete', false)
                .set('error', action.error);
    default:
      return state;
  }
}

export default languageProviderReducer;
