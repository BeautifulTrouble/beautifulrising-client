
import { fromJS } from 'immutable';
import toolsSortOptionsReducer from '../reducer';

describe('toolsSortOptionsReducer', () => {
  it('returns the initial state', () => {
    expect(toolsSortOptionsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
