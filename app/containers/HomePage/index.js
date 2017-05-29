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
import ToolsSortOptions from 'containers/ToolsSortOptions';

import LeftSection from 'components/LeftSection';

import { LeftHeader, LeftContainer } from 'components/HomePageComponents';

import Stage from 'components/Stage';

import { loadData } from '../App/actions';
import makeSelectHomePage, { makeSelectToolView, makeSelectAllTools, makeSortedTools } from './selectors';
import styled from 'styled-components';


import ToolListItem from './ToolListItem';
import ToolList from './ToolList';
import BlockView from './BlockView';
import ListView from './ListView';
import Header from './Header';
import messages from './messages';

const SearchResultsContainer = styled.div`
  text-align: left;
`;
const SearchResultsText = styled.span``;

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    if (!this.props.tools) {
      this.props.onPageLoad();
    }
  }

  getViewMode() {
    console.log(this.props.viewTool);
    return this.props.viewTool === BLOCK_VIEW ? BlockView : ListView;
  }

  getSearchResultsHeader() {

    if (!this.props.params.filter || this.props.params.filter !== 'search' || !this.props.params.label) return;

    return (
      <SearchResultsContainer>
        <SearchResultsText>
          Search results for <strong>{this.props.params.label}</strong>:
        </SearchResultsText>
      </SearchResultsContainer>
    );
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
        <Header />
        <LeftSection>

          <LeftHeader>
            <FormattedMessage {...messages.viewAs} />
          </LeftHeader>

          <LeftContainer>
            <ToolsViewOptions />
          </LeftContainer>

          <LeftHeader>
            <FormattedMessage {...messages.sortBy} />
          </LeftHeader>

          <LeftContainer>
            <ToolsSortOptions />
          </LeftContainer>


          <LeftHeader>
            <FormattedMessage {...messages.tags} />
          </LeftHeader>
          <Tags />
        </LeftSection>
        <Stage>
          {this.getSearchResultsHeader()}
          <ViewMode>
            <ToolList>
              { this.props.sorted ? this.props.sorted.map(tool => { return (<ToolListItem key={tool['_id']} {...tool}/>) }) : null }
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
    sorted: makeSortedTools(state, props)
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
