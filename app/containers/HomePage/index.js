/*
 *
 * HomePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { push } from 'react-router-redux';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Tags from 'containers/Tags';
import { BLOCK_VIEW, LIST_VIEW } from 'containers/ToolsViewOptions/constants';
import { makeSelectToolById,
          makeSelectData,
          makeSelectLoading,
          makeSelectError
       } from 'containers/App/selectors';

import ToolsViewOptions from 'containers/ToolsViewOptions';
import ToolsSortOptions from 'containers/ToolsSortOptions';

import LeftSection from 'components/LeftSection';

import { LeftHeader, LeftContainer } from 'components/HomePageComponents';

import Stage from 'components/Stage';

import { loadData } from '../App/actions';
import makeSelectHomePage, { makeSelectToolView, makeSelectAllTools, isToolsShown, makeSortedTools, makeSelectLanguage } from './selectors';
import styled from 'styled-components';


import ToolList from './ToolList';
import BlockViewItem from './BlockViewItem';
import ListViewItem from './ListViewItem';
import Header from './Header';
import messages from './messages';

const SearchResultsContainer = styled.div`
  text-align: left;
  padding-left: 42px;
  color: #828486;
  font-size: 14px;
`;
const SearchResultsText = styled.span``;

const ClearButton = styled.button`
  outline: none;
  font-family: 'Avenir Black', sans-serif;
  font-weight: 800;
  padding-right: 24px;
  text-transform: uppercase;
  padding-bottom: 20px;
  cursor: pointer;

  * { vertical-align: middle; }
`;
const Container = styled.div`
  padding-top: ${props=>props.full ? '490px' : props.isStory ? '420px' : '340px'};
`;

const TOP=0,MIDDLE=1,BOTTOM=2;

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    if (!this.props.tools) {
      this.props.onPageLoad();
    }
  }

  getViewMode() {
    return this.props.viewTool === BLOCK_VIEW ? BlockViewItem : ListViewItem;
  }

  handleClearSearch() {
    this.props.dispatch(push('/'));
  }

  getSearchResultsHeader() {

    if (!this.props.params.filter || this.props.params.filter !== 'search' || !this.props.params.label) return;

    return (
      <SearchResultsContainer>
        <SearchResultsText>
          <ClearButton onClick={this.handleClearSearch.bind(this)}>☒ <FormattedMessage {...messages.clearSearch} /></ClearButton>
          <FormattedHTMLMessage {...messages.searchResults} values={{label: this.props.params.label, count: this.props.sorted ? this.props.sorted.length : 0 }} />
        </SearchResultsText>
      </SearchResultsContainer>
    );
  }
  getDirection() {
    return this.props.language === 'ar' ? 'rtl' : 'ltr';
  }

  randomizePosition(tool) {
    const positions = [TOP, MIDDLE, BOTTOM];
    const randomPos = positions[tool.timestamp%52917 % 3];

    switch(randomPos) {
      case TOP: return { top: '10px'};
      case MIDDLE: return { top: '50%', transform: 'translateY(-50%)'};
      case BOTTOM: return { bottom: '10px' };
    }
  }

  render() {
    
    const lang = this.props.language;
    const ListItem = this.getViewMode();
    return (
      <Container dir={this.getDirection()} full={this.props.params.filter !== 'type'} isStory = {this.props.params.label === 'story'}>
        <Helmet
          title="HomePage"
          meta={[
            { name: 'description', content: 'Description of HomePage' },
          ]}
        />
        <Header {...this.props} lang={lang}/>
        <LeftSection lang={lang}>

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
        <Stage lang={lang}>
          {this.getSearchResultsHeader()}
          <ToolList>
            { this.props.sorted ? this.props.sorted.map((tool, index) => { return (<ListItem position={this.randomizePosition(tool)} lang={this.props.language} key={tool['_id']} {...tool}/>) }) : null }
          </ToolList>
        </Stage>
      </Container>
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
    sorted: makeSortedTools(state, props),
    language: makeSelectLanguage(state, props),
    showTools: isToolsShown(state, props)
  }
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onPageLoad: (evt) => {
      dispatch(loadData());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
