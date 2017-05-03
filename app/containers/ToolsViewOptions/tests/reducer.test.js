
import { fromJS } from 'immutable';
import toolsViewOptionsReducer from '../reducer';

describe('toolsViewOptionsReducer', () => {
  it('returns the initial state', () => {
    expect(toolsViewOptionsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
