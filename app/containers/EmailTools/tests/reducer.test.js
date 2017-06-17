
import { fromJS } from 'immutable';
import emailToolsReducer from '../reducer';

describe('emailToolsReducer', () => {
  it('returns the initial state', () => {
    expect(emailToolsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
