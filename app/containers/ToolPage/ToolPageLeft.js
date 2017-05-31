/*
 *
 * ToolPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import Author from 'containers/Author';
import AdderRemover from 'containers/Tools/AdderRemover';
import { ToolLeftArea, ToolsPageLeftHeader, ToolsPageContributor } from 'components/ToolsPageComponents';
// import { makeSelectToolById } from 'containers/Tool/selectors';

import messages from './messages';

export class ToolPageLeft extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function


  render() {
    console.log(this.props);
    return (
      <ToolLeftArea>
        <ToolsPageContributor>Contributed By</ToolsPageContributor>
        { this.props.authors.map(item=><Author key={item} slug={item}/>) }
        <ToolsPageLeftHeader>Tags</ToolsPageLeftHeader>
        <ToolsPageLeftHeader>Training</ToolsPageLeftHeader>
      </ToolLeftArea>
    );
  }
}

ToolPageLeft.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(null, mapDispatchToProps)(ToolPageLeft);
