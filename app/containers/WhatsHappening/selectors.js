import { createSelector } from 'reselect';
import Immutable, { OrderedSet, Map, List } from 'immutable';

/**
 * Direct selector to the whatsHappening state domain
 */
const selectWhatsHappeningDomain = () => (state) => state.get('whatsHappening');
const selectGlobal = () => (state) => state.get('global');

/**
 * Other specific selectors
 */
 const indexBy = (iterable, searchKey) => {
     if (iterable) {
       const reduced = iterable.reduce(
           (lookup, item) => lookup.set(item.get(searchKey), item),
           Map()
       );

       return reduced.toJS();
     }

     return Map();
 }

/**
 * Default selector used by WhatsHappening
 */

 const makeSelectToolsAsSlug = () => createSelector(
   selectGlobal(),
   (globalState) => {

       return indexBy(Immutable.fromJS(globalState.getIn(['appData', 'information'])), 'slug');
     }
 );

const makeSelectWhatsHappening = () => createSelector(
  selectWhatsHappeningDomain(),
  (substate) => substate.toJS()
);

export default makeSelectWhatsHappening;
export {
  selectWhatsHappeningDomain,
  makeSelectToolsAsSlug
};
