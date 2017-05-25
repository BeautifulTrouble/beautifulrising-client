
import { fromJS } from 'immutable';
import toolsReducer from '../reducer';

describe('toolsReducer', () => {
  it('returns the initial state', () => {
    expect(toolsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
