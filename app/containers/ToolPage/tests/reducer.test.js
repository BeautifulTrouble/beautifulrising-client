
import { fromJS } from 'immutable';
import toolPageReducer from '../reducer';

describe('toolPageReducer', () => {
  it('returns the initial state', () => {
    expect(toolPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
