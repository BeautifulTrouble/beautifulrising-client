
import { fromJS } from 'immutable';
import whatsHappeningReducer from '../reducer';

describe('whatsHappeningReducer', () => {
  it('returns the initial state', () => {
    expect(whatsHappeningReducer(undefined, {})).toEqual(fromJS({}));
  });
});
