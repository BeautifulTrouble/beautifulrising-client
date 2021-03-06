/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

import languageProviderReducer from 'containers/LanguageProvider/reducer';

import tagsReducer from 'containers/Tags/reducer';
import globalReducer from 'containers/App/reducer';
import toolsViewOptionsReducer from 'containers/ToolsViewOptions/reducer';
import toolsSortOptionsReducer from 'containers/ToolsSortOptions/reducer';
import searchFieldReducer from 'containers/SearchField/reducer';
import toolsReducer from 'containers/Tools/reducer';
import contactUsReducer from 'containers/ContactUs/reducer';
import submitRealWorldExampleReducer from 'containers/SubmitRealWorldExample/reducer';
import submitResourceReducer from 'containers/SubmitResource/reducer';
import emailToolsReducer from 'containers/EmailTools/reducer';
import toolPageReducer from 'containers/ToolPage/reducer';
import newsFeedReducer from 'containers/NewsFeed/reducer';
import submitNewsFeedReducer from 'containers/SubmitNewsFeed/reducer';
import askTheContributorReducer from 'containers/AskTheContributor/reducer';
import onboardingModalReducer from 'containers/OnboardingModal/reducer';
import translatableStaticTextReducer from 'containers/TranslatableStaticText/reducer';
import whatsHappeningReducer from 'containers/WhatsHappening/reducer';
/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = fromJS({
  locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      });
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    route: routeReducer,
    language: languageProviderReducer,
    tags: tagsReducer,
    searchField: searchFieldReducer,
    global: globalReducer,
    toolsView: toolsViewOptionsReducer,
    toolsSort: toolsSortOptionsReducer,
    tools: toolsReducer,
    toolPage: toolPageReducer,
    contactUs: contactUsReducer,
    submitRealWorldExample: submitRealWorldExampleReducer,
    submitResource: submitResourceReducer,
    emailTools: emailToolsReducer,
    newsFeed: newsFeedReducer,
    submitNewsFeed: submitNewsFeedReducer,
    askTheContributor: askTheContributorReducer,
    onboardingModal: onboardingModalReducer,
    translatableStaticText: translatableStaticTextReducer,
    whatsHappening: whatsHappeningReducer,
    ...asyncReducers,
  });
}
