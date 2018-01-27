import { createSelector } from 'reselect';
import { TAG_FILTER, TYPE_FILTER, SEARCH_FILTER } from './constants';
import { MODULE_TYPE_UNTRANSLATED, MODULE_TYPE_FULL, MODULE_TYPE_SNAPSHOT, MODULE_TYPE_GALLERY } from 'components/CommonComponents/constants';
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
 const selectSearchField = (state) => state.get('searchField');

 const selectFilter = (state, props) => { return props.params ? props.params.filter : null; }
 const selectLabel = (state, props) => { return props.params ? props.params.label : null; }
 const selectRegion = (state, props) => { return props.params ? props.params.region : null; }

 const allTags = createSelector(
   [selectGlobal],
   (globalState) => {
     let appData = globalState.getIn(['appData', 'information']);

     if (appData) {
       let tags = appData.find(item => item['type'] == 'text' && item['slug'] == 'tags');
       return tags;
     }
   }
 );

 const isFullTool = (item, lang) => {
  return item['module-type-effective'] === MODULE_TYPE_GALLERY
         || item['module-type-effective'] === MODULE_TYPE_FULL;
 }

const isSearchItem = (item, lang) => {
  return item['module-type-effective'] === MODULE_TYPE_GALLERY
         || item['module-type-effective'] === MODULE_TYPE_FULL
         || item['module-type-effective'] === MODULE_TYPE_SNAPSHOT;
}

const selectToolsDomain = (state) => state.get('tools');

const isToolsShown = createSelector(
  selectToolsDomain,
  (tools) =>  {
    return tools.get('show') || tools.get('onboardShow');
  }
);

const makeSelectLanguage = createSelector(
  [selectLanguage],
  languageState => {
    return languageState.get('locale');
  }
);

const makeSelectSearchFieldValue = createSelector(
  [selectSearchField],
  searchField => searchField.get('searchField')
)

 const makeSelectAllTools = createSelector(
   [selectGlobal, selectFilter, selectLabel, allTags, selectRegion, makeSelectLanguage],
   (globalState, filter, label, tags, region, lang) => {
     let data = globalState.getIn(['appData', 'information']);
     if (data) {
       switch (filter) {
         case TAG_FILTER:
          return data.filter(item => isFullTool(item, lang) && item.tags && item.tags.map(i=>slugify(i)).includes(label));
          break;
         case TYPE_FILTER:
          const result = data.filter(item => isFullTool(item, lang) && item.type === label);

          if (region !== undefined && region) {
            return result.filter(item => item.regions && item.regions.map(slugify).includes(region));
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
            const searchIndices = [
              "short-write-up",
              "full-write-up",
              "snapshot",
              "image-caption",
              "epigraphs",
              "why-it-worked",
              "why-it-failed",
              "key-theories",
              "key-principles",
              "key-tactics",
              "key-methodologies",
              "tags",
              "byline",
              "authors",
              "title",
              "slug"
            ];
            return label ? data.filter(
                              item => {
                                  const searchBase = searchIndices.map(key => item[key]).join(' ').toLowerCase();
                                  console.log(searchBase, label)
                                  return isSearchItem(item, lang) && item['module-type-effective'] !== MODULE_TYPE_UNTRANSLATED && searchBase.search(label.toLowerCase()) >= 0
                              }
                           )
                         : data.filter(item => isFullTool(item, lang));
          }
         default:
          return data.filter(item => isFullTool(item, lang));

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
          const copy = Object.assign([], tools);
          return copy.sort((a, b) => {
            return new Date(b.timestamp) - new Date(a.timestamp);
            // if (a.timestamp > b.timestamp) return -1;
            // if (a.timestamp < b.timestamp) return 1;
            // return 0;
          })
         case SORT_ALPHABETICAL:
          return Object.assign([], tools); //Make a copy
          // return tools.sort((a, b) => {
          //     if(a.title < b.title) return -1;
          //     if(a.title > b.title) return 1;
          //     return 0;
          // })
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
  allTags,
  isToolsShown,
  makeSelectSearchFieldValue
};
