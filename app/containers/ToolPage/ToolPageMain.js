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
import { ToolMainArea } from 'components/ToolsPageComponents';
// import { makeSelectToolById } from 'containers/Tool/selectors';

import messages from './messages';

export class ToolPageMain extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function


  render() {

    return (
      <ToolMainArea>ToolPage Main</ToolMainArea>
    );
  }
}

ToolPageMain.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(null, mapDispatchToProps)(ToolPageMain);
