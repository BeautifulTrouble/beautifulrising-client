import { createSelector } from 'reselect';
import { TAG_FILTER, TYPE_FILTER, SEARCH_FILTER } from './constants';
import { SORT_NEWEST, SORT_ALPHABETICAL } from 'containers/ToolsSortOptions/constants';
import {slugify} from 'utils/tags';

/**
 * Direct selector to the homePage state domain
 */
const selectHomePageDomain = () => (state) => state.get('homePage');

/**
 * Other specific selectors
 */
 const selectGlobal = (state) => { return state.get('global') };
 const selectToolsView = (state) => { return state.get('toolsView') }
 const selectLanguage = (state) => state.get('language');

 const selectFilter = (state, props) => { return props.params.filter; }
 const selectLabel = (state, props) => { return props.params.label; }
 const selectRegion = (state, props) => { return props.params.region; }

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

const makeSelectLanguage = createSelector(
  [selectLanguage],
  languageState => {
    return languageState.get('locale');
  }
);

 const makeSelectAllTools = createSelector(
   [selectGlobal, selectFilter, selectLabel, allTags, selectRegion],
   (globalState, filter, label, tags, region) => {
     let data = globalState.getIn(['appData', 'information']);
     if (data) {
       switch (filter) {
         case TAG_FILTER:
          // data.map(item=>{if(item) { console.log(item.tags, item.tags.map(i=>slugify(i)))} });
          return data.filter(item => isFullTool(item) && item.tags && item.tags.map(i=>slugify(i)).includes(label));
          break;
         case TYPE_FILTER:
          const result = data.filter(item => isFullTool(item) && item.type === label);

          if (region !== undefined && region) {
            return result.filter(item => slugify(item.region) === region);
          }
          return result;
          break;
         case SEARCH_FILTER:
          const authorMatches = label===undefined?null:label.match(/^authors!(.+)/i);
          if (authorMatches) {
            //For authors, it doesn't matter if it's a snapshot or a full item.
            return label ? data.filter(item => {
                return item.authors && (item.authors.filter(author=> author.toLowerCase().includes(authorMatches[1].toLowerCase())).length > 0);
            }) : [];
          } else {
            return label ? data.filter(item => isFullTool(item) && item.title.toLowerCase().search(label.toLowerCase()) >= 0) : data.filter(item => isFullTool(item))
          }
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

     if (tools) {
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

     return null;

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
  makeSelectLanguage,
  allTags
};
