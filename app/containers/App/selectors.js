import Immutable, { OrderedSet, Map, List } from 'immutable';
import { createSelector } from 'reselect';
import {slugify} from 'utils/tags';
const selectGlobal = (state) => state.get('global');
const selectTools = (state) => state.get('tools');
const selectLanguage = (state) => state.get('language');
const selectTranslatableStaticText = (state) => state.get('translatableStaticText');
const selectWhatsHappening = (state) => state.get('whatsHappening');

const makeSelectWhatsHappening = () => createSelector(
  [selectWhatsHappening],
  (whatsHappeningData) => whatsHappeningData.get('data')
)
const makeSelectLanguage = () => createSelector(
  [selectLanguage],
  (languageState) => languageState.get('locale')
)

const makeSelectStaticText = () => createSelector(
  [selectTranslatableStaticText],
  (staticTextState) => staticTextState.get('data')
)
/* This will take all items */
/* Source: https://stackoverflow.com/questions/33830745/immutablejs-convert-list-to-indexed-map */
const indexBy = (iterable, searchKey) => {
    if (iterable) {
      return iterable.reduce(
          (lookup, item) => lookup.set(item.get(searchKey), item),
          Map()
      );
    } return Map()
}


// Get all items with slugs as index
const makeSelectAllToolsWithSlugIndex = () => createSelector(
  [selectGlobal],
  (globalState) => {
      return indexBy(Immutable.fromJS(globalState.getIn(['appData', 'information'])), 'slug');
    }
);

const makeSelectSlugged = () => createSelector(
  [selectGlobal],
  (globalState) => {
      return indexBy(Immutable.fromJS(globalState.getIn(['appData', 'information'])), 'slug');
    }
);

const makeSelectAdvisoryBoard = () => createSelector(
    [selectGlobal],
    (globalState) => {

        if (globalState.getIn(['appData', 'information'])) {
          return globalState.getIn(['appData', 'information']).filter(item => {
                return item['team-bio'] !== undefined && item['team-title'] !== undefined && item['team-title'] === 'Advisory Network';
            });
        }
        return List();
      }
  );

/* THIS WILL BE REVISED*/
const getTagsArray = (state, props) => { return props.tags };
const makeSelectAllTags = createSelector(
  [getTagsArray, selectGlobal],
  (toolTags, globalState) => {
    if (globalState.getIn(['appData', 'tags']) !== undefined && globalState.getIn(['appData', 'tags']).size !== 0) {
      const allTags = globalState.getIn(['appData', 'tags']);
      return (toolTags ? toolTags : Object.keys(allTags))
                .map((key, index) => {
                    return {key: key, value: allTags[key]}}
                )
                .sort((a, b) => {
                  if ( a.value < b.value ) return -1;
                  else if ( b.value < a.value ) return 1;
                  else return 0;
                });
      // return OrderedSet(globalState.getIn(['appData', 'information'])
      //   .filter(item => item.type !== 'person')
      //   .reduce((acc, item) => {
      //     if (item.tags !== null && item.tags !== undefined) {
      //       return acc.concat(item.tags.map(i => i.toLowerCase()));
      //       // return acc.merge(item.tags);
      //     }
      //     return acc
      //   } , [])
      // ).sort();
    } else {
      return [];
    }
  }
);

const isShowTools = () => createSelector(
  selectTools,
  (toolsState) => {
    return toolsState.get('show') || toolsState.get('onboardShow');
  }
)

const getToolSlug = (state, props) => { return props.params.label; }
const makeSelectToolById = createSelector(
  [ selectGlobal, getToolSlug ],
  (globalData, slug) => {
    if( globalData.getIn(['appData', 'information']) ) {
      return appData.find(tool => tool.slug === slug);
    }
    return null;
  }
)

const isFullTool = (item) => item['module-type'] === 'gallery' || item['module-type'] === 'full' ;
const makeSelectExamples = (type) => createSelector(
  selectGlobal,
  (globalState) => {
    if( globalState.getIn(['appData', 'information']) ) {
      let data = globalState.getIn(['appData', 'information']);
      return data.filter(item => isFullTool(item) && item.type === type).slice(0,4);
    }
  }
)

const makeSelectLoading = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loading')
);

const makeSelectError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('error')
);

const makeSelectData = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn(['appData', 'information'])
);

// const makeSelectToolView = () => createSelector(
//   [selectGlobal],
//   (globalState) => { return globalState.get('toolsView')}
// );
// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  makeSelectToolById,
  makeSelectLocationState,
  makeSelectLoading,
  makeSelectError,
  makeSelectData,
  makeSelectAllTags,
  isShowTools,
  makeSelectAllToolsWithSlugIndex,
  makeSelectAdvisoryBoard,
  makeSelectLanguage,
  makeSelectExamples,
  makeSelectSlugged,
  makeSelectStaticText,
  makeSelectWhatsHappening
  // makeSelectToolView,
};
