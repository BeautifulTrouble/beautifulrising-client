import { createSelector } from 'reselect';

/**
 * Direct selector to the submitRealWorldExample state domain
 */
const makeSelectSubmitResourceDomain = () => (state) => state.get('submitResource');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SubmitRealWorldExample
 */

const makeSelectSubmitResource = () => createSelector(
  makeSelectSubmitResourceDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSubmitResource;
export {
  makeSelectSubmitResourceDomain,
};
