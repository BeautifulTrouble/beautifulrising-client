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
  USER_IS_ONBOARDED
} from './constants';

// The initial state of the App
const initialState = fromJS({
  onboarded: false,
});

function onboardingModalReducer(state = initialState, action) {
  switch (action.type) {
    case USER_IS_ONBOARDED:
      return state
        .set('onboarded', true);
    default:
      return state;
  }
}

export default onboardingModalReducer;
