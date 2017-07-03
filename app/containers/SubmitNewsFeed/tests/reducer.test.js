
import { fromJS } from 'immutable';
import submitNewsFeedReducer from '../reducer';

describe('submitNewsFeedReducer', () => {
  it('returns the initial state', () => {
    expect(submitNewsFeedReducer(undefined, {})).toEqual(fromJS({}));
  });
});
