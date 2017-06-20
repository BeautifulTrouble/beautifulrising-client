
import { fromJS } from 'immutable';
import askTheContributorReducer from '../reducer';

describe('askTheContributorReducer', () => {
  it('returns the initial state', () => {
    expect(askTheContributorReducer(undefined, {})).toEqual(fromJS({}));
  });
});
