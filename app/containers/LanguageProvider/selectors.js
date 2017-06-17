import { createSelector } from 'reselect';

/**
 * Direct selector to the languageToggle state domain
 */
const selectLanguage = (state) => state.get('language');

/**
 * Select the language locale
 */

const makeSelectLocale = () => createSelector(
  selectLanguage,
  (languageState) => languageState.get('locale')
);

const makeSelectLanguageData = () => createSelector(
  selectLanguage,
  (languageState) => {
    console.log("Language State!", languageState);

    return languageState.get('data')
  }
)

export {
  selectLanguage,
  makeSelectLocale,
  makeSelectLanguageData,
};
