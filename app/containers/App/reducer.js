/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_DATA_SUCCESS,
  LOAD_DATA,
  LOAD_DATA_ERROR,
  LANGUAGE_CHANGE_RELOAD_DATA,
  USER_IS_ONBOARDED
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  appData: {
    information: false,
    tags: {}
  },
  chosenTools: []
});

function appReducer(state = initialState, action) {

  switch (action.type) {
    case LOAD_DATA:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['appData', 'information'], false);
    case LOAD_DATA_SUCCESS:
      return state
        .setIn(['appData', 'information'], action.data)
        //TODO: Not sure if best practice
        .setIn(['appData', 'tags'], action.data.filter(item=>`${item.type}:${item.slug}` === 'text:tags')[0]['all'])
        .set('loading', false)
        ;
    case LOAD_DATA_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
