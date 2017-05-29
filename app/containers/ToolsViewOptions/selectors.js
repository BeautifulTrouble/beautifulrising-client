import { createSelector } from 'reselect';
import { BLOCK_VIEW, LIST_VIEW } from './constants';
/**
 * Direct selector to the toolsViewOptions state domain
 */
const selectToolViewOptions = (state) => { return state.get('toolsView') };

/**
 * Other specific selectors
 */

 const makeSelectToolView = () => createSelector(
     selectToolViewOptions,
     (substate) => substate.toJS()
 );

 const isListView = () => createSelector(
   selectToolViewOptions,
   (substate) => substate.get('chosen') === LIST_VIEW
 );

 const isBlockView = () => createSelector(
   selectToolViewOptions,
   (substate) => substate.get('chosen') === BLOCK_VIEW
 );
/**
 * Default selector used by ToolsViewOptions
 */


export default makeSelectToolView;
export {
  selectToolViewOptions,
  isListView,
  isBlockView
};
