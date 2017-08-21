
import { fromJS } from 'immutable';
import submitRealWorldExampleReducer from '../reducer';

describe('submitRealWorldExampleReducer', () => {
  it('returns the initial state', () => {
    expect(submitRealWorldExampleReducer(undefined, {})).toEqual(fromJS({}));
  });
});
