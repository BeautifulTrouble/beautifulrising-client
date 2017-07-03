
import { fromJS } from 'immutable';
import authorReducer from '../reducer';

describe('authorReducer', () => {
  it('returns the initial state', () => {
    expect(authorReducer(undefined, {})).toEqual(fromJS({}));
  });
});
