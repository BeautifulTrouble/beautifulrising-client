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
import { BLOCK_VIEW, LIST_VIEW } from 'containers/ToolsViewOptions/constants';
import { makeSelectToolById,
          makeSelectData,
          makeSelectLoading,
          makeSelectError,
       } from 'containers/App/selectors';

import ToolsViewOptions from 'containers/ToolsViewOptions';

import LeftSection from 'components/LeftSection';
import Stage from 'components/Stage';

import { loadData } from '../App/actions';
import makeSelectHomePage, { makeSelectToolView, makeSelectAllTools } from './selectors';



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

  getViewMode() {
    return this.props.viewTool === BLOCK_VIEW ? BlockView : ListView;
  }

  render() {
    const ViewMode = this.getViewMode();
    return (
      <div>
        <Helmet
          title="HomePage"
          meta={[
            { name: 'description', content: 'Description of HomePage' },
          ]}
        />
        <LeftSection>
          <FormattedMessage {...messages.header} />
          <ToolsViewOptions />
          <Tags />
        </LeftSection>
        <Stage>
          <ViewMode>
            <ToolList>
              { this.props.tools ? this.props.tools.map(tool => { return (<ToolListItem key={tool['_id']} {...tool}/>) }) : null }
            </ToolList>
          </ViewMode>
        </Stage>
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
    viewTool: makeSelectToolView(state),
    loading: makeSelectLoading(state),
    error: makeSelectError(state),
    tools: makeSelectAllTools(state, props),
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
