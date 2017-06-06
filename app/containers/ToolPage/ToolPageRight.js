/*
 *
 * ToolPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { makeSelectAllToolsWithSlugIndex } from 'containers/App/selectors';
import AdderRemover from 'containers/Tools/AdderRemover';
import { ToolRightArea, ToolsPageRelatedToolsHeader, ToolsPageRightHeader, ToolsRelatedArea } from 'components/ToolsPageComponents';
// import { makeSelectToolById } from 'containers/Tool/selectors';

import messages from './messages';

export class ToolPageRight extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <ToolRightArea>
        <ToolsPageRelatedToolsHeader>Related Tools</ToolsPageRelatedToolsHeader>
        <ToolsRelatedArea>
          <ToolsPageRightHeader>Tactics</ToolsPageRightHeader>

          <ToolsPageRightHeader>Principles</ToolsPageRightHeader>
          <ToolsPageRightHeader>Theories</ToolsPageRightHeader>
          <ToolsPageRightHeader>Methodologies</ToolsPageRightHeader>
          <ToolsPageRightHeader>Stories</ToolsPageRightHeader>
        </ToolsRelatedArea>
      </ToolRightArea>
    );
  }
}

ToolPageRight.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
   toolsList: makeSelectAllToolsWithSlugIndex()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolPageRight);
