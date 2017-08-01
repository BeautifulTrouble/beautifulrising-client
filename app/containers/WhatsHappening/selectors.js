import { createSelector } from 'reselect';

/**
 * Direct selector to the whatsHappening state domain
 */
const selectWhatsHappeningDomain = () => (state) => state.get('whatsHappening');

/**
 * Other specific selectors
 */


/**
 * Default selector used by WhatsHappening
 */

const makeSelectWhatsHappening = () => createSelector(
  selectWhatsHappeningDomain(),
  (substate) => substate.toJS()
);

export default makeSelectWhatsHappening;
export {
  selectWhatsHappeningDomain,
};
