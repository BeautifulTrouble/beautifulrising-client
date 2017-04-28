import { createSelector } from 'reselect';

/**
 * Direct selector to the tags state domain
 */
const selectTagsDomain = () => (state) => {
  return state.get('tags')
};

/**
 * Other specific selectors
 */


/**
 * Default selector used by Tags
 */

const makeSelectTags = () => createSelector(
  selectTagsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTags;
export {
  selectTagsDomain,
};
