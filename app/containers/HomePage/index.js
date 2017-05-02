/*
 *
 * HomePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Tags from 'containers/Tags';
import { makeSelectToolById,
          makeSelectData, makeSelectLoading,
          makeSelectError } from 'containers/App/selectors';

import { loadData } from '../App/actions';
import makeSelectHomePage, { makeSelectAllTools } from './selectors';

import ToolListItem from './ToolListItem';
import ToolList from './ToolList';
import BlockView from './BlockView';
import ListView from './ListView';
import messages from './messages';


export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    if (!this.props.tools) {
      this.props.onPageLoad();
    }
  }

  render() {
    // TODO: Make this work for switches on cookie / persist
    const ViewMode = ListView;
    return (
      <div>
        <Helmet
          title="HomePage"
          meta={[
            { name: 'description', content: 'Description of HomePage' },
          ]}
        />
        <FormattedMessage {...messages.header} />

        <Tags />
        <ViewMode>
          <ToolList>
            { this.props.tools ? this.props.tools.map(tool => { return (<ToolListItem key={tool['_id']} {...tool}/>) }) : null }
          </ToolList>
        </ViewMode>
      </div>
    );
  }
}

HomePage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => {
  return {
    HomePage: makeSelectHomePage(),
    loading: makeSelectLoading(),
    error: makeSelectError(),
    tools: makeSelectAllTools(state, props)
  }
};

function mapDispatchToProps(dispatch) {
  return {
    onPageLoad: (evt) => {
      dispatch(loadData());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
