import { createSelector } from 'reselect';
import { TAG_FILTER, TYPE_FILTER, SEARCH_FILTER } from './constants';
import { SORT_NEWEST, SORT_ALPHABETICAL } from 'containers/ToolsSortOptions/constants';
/**
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = () => (state) => state.get('homePage');

/**
 * Other specific selectors
 */
 const selectGlobal = (state) => { return state.get('global') };
 const selectToolsView = (state) => { return state.get('toolsView') }


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
 );

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
         case SEARCH_FILTER:
          return label ? data.filter(item => isFullTool(item) && item.title.toLowerCase().search(label.toLowerCase()) >= 0) : data.filter(item => isFullTool(item))
         default:
          return data.filter(item => isFullTool(item));

       }
     }

   }
 );

 // Sorting it according to the call
 const selectToolsSort = (state) => { return state.get('toolsSort') }
 const makeSortedTools = createSelector(
   [selectToolsSort, makeSelectAllTools],
   (sortByResult, tools) => {
     const sortBy = sortByResult.get('chosen');

     switch (sortBy) {
       case SORT_NEWEST:
        return tools.sort((a, b) => {
          return new Date(b.timestamp) - new Date(a.timestamp);
          // if (a.timestamp > b.timestamp) return -1;
          // if (a.timestamp < b.timestamp) return 1;
          // return 0;
        })
       case SORT_ALPHABETICAL:
        return tools.sort((a, b) => {
            if(a.title < b.title) return -1;
            if(a.title > b.title) return 1;
            return 0;
        })
     }
   }
 )

 const makeSelectToolView = createSelector(
   [selectToolsView],
   (toolsView) => {
      return toolsView.get('chosen');
    }
 );



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
  makeSelectToolView,
  makeSortedTools,
  allTags
};
