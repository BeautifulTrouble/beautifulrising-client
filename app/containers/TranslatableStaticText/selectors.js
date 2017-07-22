import { createSelector } from 'reselect';

/**
 * Direct selector to the translatableStaticText state domain
 */
const selectTranslatableStaticTextDomain = () => (state) => state.get('translatableStaticText');

/**
 * Other specific selectors
 */

 const makeSelectLanguageData = () => createSelector(
   selectTranslatableStaticTextDomain,
   (languageState) => {
     return languageState.get('data').toJS();
   }
 )


/**
 * Default selector used by TranslatableStaticText
 */

const makeSelectTranslatableStaticText = () => createSelector(
  selectTranslatableStaticTextDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTranslatableStaticText;
export {
  selectTranslatableStaticTextDomain,
};
