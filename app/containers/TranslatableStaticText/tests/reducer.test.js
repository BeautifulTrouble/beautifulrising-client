
import { fromJS } from 'immutable';
import translatableStaticTextReducer from '../reducer';

describe('translatableStaticTextReducer', () => {
  it('returns the initial state', () => {
    expect(translatableStaticTextReducer(undefined, {})).toEqual(fromJS({}));
  });
});
