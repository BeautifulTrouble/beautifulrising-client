/*
 *
 * ToolPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import AdderRemover from 'containers/Tools/AdderRemover';
import { ToolRightArea } from 'components/ToolsPageComponents';
// import { makeSelectToolById } from 'containers/Tool/selectors';

import messages from './messages';

export class ToolPageRight extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <ToolRightArea>ToolPage Right</ToolRightArea>
    );
  }
}

ToolPageRight.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(null, mapDispatchToProps)(ToolPageRight);
