import { createSelector } from 'reselect';

/**
 * Direct selector to the tools state domain
 */
const selectToolsDomain = () => (state) => state.get('tools');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Tools
 */

const makeSelectTools = () => createSelector(
  selectToolsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTools;
export {
  selectToolsDomain,
};
