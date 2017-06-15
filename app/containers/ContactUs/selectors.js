import { createSelector } from 'reselect';

/**
 * Direct selector to the contactUs state domain
 */
const selectContactUsDomain = () => (state) => state.get('contactUs');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ContactUs
 */

const makeSelectContactUs = () => createSelector(
  selectContactUsDomain(),
  (substate) => substate.toJS()
);

export default makeSelectContactUs;
export {
  selectContactUsDomain,
};
