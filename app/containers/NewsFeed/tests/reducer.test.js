
import { fromJS } from 'immutable';
import newsFeedReducer from '../reducer';

describe('newsFeedReducer', () => {
  it('returns the initial state', () => {
    expect(newsFeedReducer(undefined, {})).toEqual(fromJS({}));
  });
});
