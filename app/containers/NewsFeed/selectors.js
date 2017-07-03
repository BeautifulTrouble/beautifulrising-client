import { createSelector } from 'reselect';

/**
 * Direct selector to the newsFeed state domain
 */
const selectNewsFeedDomain = () => (state) => state.get('newsFeed');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NewsFeed
 */

const makeSelectNewsFeed = () => createSelector(
  selectNewsFeedDomain(),
  (substate) => substate.toJS()
);

export default makeSelectNewsFeed;
export {
  selectNewsFeedDomain,
};
