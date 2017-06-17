import { createSelector } from 'reselect';

/**
 * Direct selector to the emailTools state domain
 */
const selectEmailToolsDomain = () => (state) => state.get('emailTools');

/**
 * Other specific selectors
 */


/**
 * Default selector used by EmailTools
 */

const makeSelectEmailTools = () => createSelector(
  selectEmailToolsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectEmailTools;
export {
  selectEmailToolsDomain,
};
