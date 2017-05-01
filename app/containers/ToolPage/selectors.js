import { createSelector } from 'reselect';
import { Map } from 'immutable';

import { TYPE_PERSON } from './constant';
/**
 * Direct selector to the toolPage state domain
 */
const selectToolPageDomain = () => (state) => state.get('toolPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ToolPage
 */
 const selectGlobal = (state) => {console.log("X",state.get('global')); return state.get('global') };

 const getToolSlug = (state, props) => { console.log("!!", props, props.params.label); return props.params.label; }


 const makeSelectTool = createSelector(
   [ selectGlobal, getToolSlug ],
   (globalData, slug) => {

     let appData = globalData.getIn(['appData', 'information']);
     if( appData ) {
        const tool = appData.find(tool => tool.slug === slug);

        const authors = tool.authors.map(author =>
          appData.find(person => person.type === TYPE_PERSON && person.slug === author) );
        return Map({ tool, authors })
     }

     return Map({tool: {}, authors: []});
   }
 )


const makeSelectToolPage = () => createSelector(
  selectToolPageDomain(),
  (substate) => substate.toJS({})
);

export default makeSelectToolPage;
export {
  makeSelectTool,
};
