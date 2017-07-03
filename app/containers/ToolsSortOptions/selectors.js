import { createSelector } from 'reselect';
import { SORT_ALPHABETICAL, SORT_NEWEST } from './constants';

/**
 * Direct selector to the toolsSortOptions state domain
 */
const selectToolsSortOptionsDomain = () => (state) => state.get('toolsSort');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ToolsSortOptions
 */

const makeSelectToolsSortOptions = () => createSelector(
  selectToolsSortOptionsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectToolsSortOptions;
export {
  selectToolsSortOptionsDomain,
};
