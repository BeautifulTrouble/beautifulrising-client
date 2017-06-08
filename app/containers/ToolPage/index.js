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

import AdderRemover from 'containers/Tools/AdderRemover';
import { ToolInformation, ToolHeader } from 'components/ToolsPageComponents';
// import { makeSelectToolById } from 'containers/Tool/selectors';

import { loadData } from '../App/actions';

import makeSelectToolPage, { makeSelectTool } from './selectors';
import messages from './messages';
import ToolPageHeader from './ToolPageHeader';
import ToolPageLeft from './ToolPageLeft';
import ToolPageMain from './ToolPageMain';
import ToolPageRight from './ToolPageRight';

export class ToolPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    if (!this.props.toolData.getIn(['tool'])._id) {
      this.props.onPageLoad();
    }
  }

  render() {
    const tool = this.props.toolData.getIn(['tool']);
    if (!tool._id) return null;

    return (
      <div>
        <Helmet
          title="ToolPage"
          meta={[
            { name: 'description', content: 'Description of ToolPage' },
          ]}
        />
        <ToolHeader>
          <ToolPageHeader {...tool} />
        </ToolHeader>
        <ToolInformation>
          <ToolPageLeft {...tool} />
          <ToolPageMain {...tool} />
          <ToolPageRight {...tool} />
        </ToolInformation>
      </div>
    );
  }
}

// <h3>{tool.type}</h3>
// <p>{tool['short-write-up']}</p>
// <h3>{this.props.toolData.getIn(['authors']).map(item => item.title)}</h3>

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
