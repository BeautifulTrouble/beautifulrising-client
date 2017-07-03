import { createSelector } from 'reselect';

/**
 * Direct selector to the askTheContributor state domain
 */
const selectAskTheContributorDomain = () => (state) => state.get('askTheContributor');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AskTheContributor
 */

const makeSelectAskTheContributor = () => createSelector(
  selectAskTheContributorDomain(),
  (substate) => substate.toJS()
);

export default makeSelectAskTheContributor;
export {
  selectAskTheContributorDomain,
};
