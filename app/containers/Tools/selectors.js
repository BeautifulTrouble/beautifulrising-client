import { createSelector } from 'reselect';

/**
 * Direct selector to the tools state domain
 */
const selectToolsDomain = (state) => state.get('tools');

/**
 * Other specific selectors
 */
const getToolSlug = (state, props) => props.slug;
const toolIsSelected = createSelector(
  [selectToolsDomain, getToolSlug],
  (substate, slug) => substate.getIn(['selectedTools', slug])
);

/**
 * Default selector used by Tools
 */

const makeSelectTools = () => createSelector(
  selectToolsDomain,
  (substate) => substate.toJS()
);

export default makeSelectTools;
export {
  selectToolsDomain,
  toolIsSelected
};
