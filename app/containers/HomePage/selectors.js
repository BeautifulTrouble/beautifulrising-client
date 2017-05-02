import { createSelector } from 'reselect';
import { TAG_FILTER, TYPE_FILTER } from './constants';
/**
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = () => (state) => state.get('homePage');

/**
 * Other specific selectors
 */
 const selectGlobal = (state) => { return state.get('global') };

 const selectFilter = (state, props) => { return props.params.filter; }
 const selectLabel = (state, props) => { return props.params.label; }
 const allTags = createSelector(
   [selectGlobal],
   (globalState) => {
     let appData = globalState.getIn(['appData', 'information']);

     if (appData) {
       let tags = appData.find(item => item['_id'] === 'text:tags');
       return tags;
     }
   }
 )

 const isFullTool = (item) => item['module-type'] === 'gallery' || item['module-type'] === 'full' ;
 const makeSelectAllTools = createSelector(
   [selectGlobal, selectFilter, selectLabel, allTags],
   (globalState, filter, label, tags) => {

     let data = globalState.getIn(['appData', 'information']);
     if (data) {
       switch (filter) {
         case TAG_FILTER:
          return data.filter(item => isFullTool(item) && item.tags && item.tags.includes(tags.all[label]));
          break;
         case TYPE_FILTER:
          return data.filter(item => isFullTool(item) && item.type === label);
          break;
         default:
          return data.filter(item => isFullTool(item) );
       }
     }

   }
 )


/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () => createSelector(
  selectHomePageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectHomePage;
export {
  selectHomePageDomain,
  makeSelectAllTools,
  allTags
};
