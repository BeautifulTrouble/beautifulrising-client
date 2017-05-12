import { createSelector } from 'reselect';

/**
 * Direct selector to the searchField state domain
 */
const selectSearchFieldDomain = () => (state) => state.get('searchField');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SearchField
 */

const makeSelectSearchField = () => createSelector(
  selectSearchFieldDomain(),
  (substate) => substate.toJS({})
);

export default makeSelectSearchField;
export {
  selectSearchFieldDomain,
};
