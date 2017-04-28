
import { fromJS } from 'immutable';
import tagsReducer from '../reducer';

describe('tagsReducer', () => {
  it('returns the initial state', () => {
    expect(tagsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
