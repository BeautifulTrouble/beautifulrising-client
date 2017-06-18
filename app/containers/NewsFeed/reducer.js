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
      return state.set('newsFeed', action.data.reverse().concat(state.get('newsFeed')));
    default:
      return state;
  }
}

export default newsFeedReducer;
