
import { fromJS } from 'immutable';
import staticTextHandlerReducer from '../reducer';

describe('staticTextHandlerReducer', () => {
  it('returns the initial state', () => {
    expect(staticTextHandlerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
