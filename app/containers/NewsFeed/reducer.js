/*
 *
 * NewsFeed reducer
 *
 */

import { fromJS, List } from 'immutable';
import {
  DEFAULT_ACTION,
  ADD_TO_NEWSFEED
} from './constants';

const initialState = fromJS({
  newsFeed: List()
});

function newsFeedReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case ADD_TO_NEWSFEED:
      console.log(state.get('newsFeed'));
      console.log(action.data);
      console.log(state.get('newsFeed').concat(action.data));
      return state.set('newsFeed', state.get('newsFeed').concat(action.data));
    default:
      return state;
  }
}

export default newsFeedReducer;
