/*
 *
 * Tools reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  ADD_TOOL,
  REMOVE_TOOL,
  SET_SHOW_TOOLS,
  SET_VIEW_TYPE,
  NEWS_FEED,
  NEW_USER_TOOL_ONBOARDING,
  TOOL_ONBOARDING_FINISHED
} from './constants';

const initialState = fromJS({
  show: false,
  onboardShow: false,
  selectedTools: {},
  viewType: NEWS_FEED
});

function toolsReducer(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
    case SET_SHOW_TOOLS:
      return state.set('show', action.data);
    case ADD_TOOL:
      return state
              .setIn(['selectedTools', action.slug], action.data);
    case REMOVE_TOOL:
      return state
                .removeIn(['selectedTools', action.slug])
    case SET_VIEW_TYPE:
      return state.set('viewType', action.data);
    case NEW_USER_TOOL_ONBOARDING:
      return state.set('onboardShow', true);
    case TOOL_ONBOARDING_FINISHED:
      return state.set('onboardShow', false);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default toolsReducer;
