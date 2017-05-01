/*
 *
 * ToolPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

// import { makeSelectToolById } from 'containers/Tool/selectors';

import { loadData } from '../App/actions';

import makeSelectToolPage, { makeSelectTool } from './selectors';
import messages from './messages';

export class ToolPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.onPageLoad();
  }

  render() {
    return (
      <div>
        <Helmet
          title="ToolPage"
          meta={[
            { name: 'description', content: 'Description of ToolPage' },
          ]}
        />
        <FormattedMessage {...messages.header} />
        <h1>{this.props.toolData.getIn(['tool']).title}</h1>
        <h3>{this.props.toolData.getIn(['tool']).type}</h3>
        <p>{this.props.toolData.getIn(['tool'])['short-write-up']}</p>
        <h3>{this.props.toolData.getIn(['authors']).map(item => item.title)}</h3>
      </div>
    );
  }
}

ToolPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    toolData: makeSelectTool(state, props)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: (evt) => {
      dispatch(loadData());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolPage);
