import { createSelector } from 'reselect';

/**
 * Direct selector to the author state domain
 */
const selectGlobalData = (state) => state.get('global');

/**
 * Other specific selectors
 */

const getAuthorSlug = (state, props) => props.slug;
const selectAuthor = createSelector(
  [selectGlobalData, getAuthorSlug],
  (substate, slug) => {
    const appData = substate.getIn(['appData', 'information']);
    const author = appData.filter((item) => item['_id'] === `person:${slug}`)
    return author ? author[0] : null;
  }
)

/**
 * Default selector used by Author
 */

const makeSelectAuthor = () => createSelector(
  selectGlobalData(),
  (substate) => substate.toJS()
);

export default makeSelectAuthor;
export {
  selectAuthor,
};
