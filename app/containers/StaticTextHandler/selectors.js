import { createSelector } from 'reselect';

/**
 * Direct selector to the staticTextHandler state domain
 */
const selectStaticTextHandlerDomain = () => (state) => state.get('staticTextHandler');

/**
 * Other specific selectors
 */


/**
 * Default selector used by StaticTextHandler
 */

const makeSelectStaticTextHandler = () => createSelector(
  selectStaticTextHandlerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectStaticTextHandler;
export {
  selectStaticTextHandlerDomain,
};
