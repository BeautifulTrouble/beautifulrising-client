import { createSelector } from 'reselect';

/**
 * Direct selector to the submitRealWorldExample state domain
 */
const selectSubmitRealWorldExampleDomain = () => (state) => state.get('submitRealWorldExample');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SubmitRealWorldExample
 */

const makeSelectSubmitRealWorldExample = () => createSelector(
  selectSubmitRealWorldExampleDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSubmitRealWorldExample;
export {
  selectSubmitRealWorldExampleDomain,
};
