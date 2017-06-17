import { createSelector } from 'reselect';

/**
 * Direct selector to the submitNewsFeed state domain
 */
const selectSubmitNewsFeedDomain = () => (state) => state.get('submitNewsFeed');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SubmitNewsFeed
 */

const makeSelectSubmitNewsFeed = () => createSelector(
  selectSubmitNewsFeedDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSubmitNewsFeed;
export {
  selectSubmitNewsFeedDomain,
};
