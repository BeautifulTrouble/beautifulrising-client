import { OrderedSet } from 'immutable';
import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

/* THIS WILL BE REVISED*/
const makeSelectAllTags = () => createSelector(
  selectGlobal,
  (globalState) => {
    if (globalState.getIn(['appData', 'information'])) {
      return OrderedSet(globalState.getIn(['appData', 'information'])
        .filter(item => item.type !== 'person')
        .reduce((acc, item) => {
          if (item.tags !== null && item.tags !== undefined) {
            return acc.concat(item.tags.map(i => i.toLowerCase()));
            // return acc.merge(item.tags);
          }
          return acc
        } , [])
      ).sort();
    } else {
      return [];
    }
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

// const makeSelectToolById = (toolSlug) => createSelector(
//   selectGlobal,
//   (globalState) => {
//     let appDataInfo = globalState.getIn(['appData', 'information']);
//     if (appDataInfo) {
//       return appDataInfo.find(item => item.slug === toolSlug);
//     }
//     return null;
//   }
// )

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
};
