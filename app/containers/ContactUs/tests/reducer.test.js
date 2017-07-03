
import { fromJS } from 'immutable';
import contactUsReducer from '../reducer';

describe('contactUsReducer', () => {
  it('returns the initial state', () => {
    expect(contactUsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
