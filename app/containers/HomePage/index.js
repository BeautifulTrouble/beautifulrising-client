/*
 *
 * HomePage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { push } from 'react-router-redux';

import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import TranslatableStaticText from 'containers/TranslatableStaticText';
import Tags from 'containers/Tags';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

import { BLOCK_VIEW, LIST_VIEW } from 'containers/ToolsViewOptions/constants';
import { makeSelectToolById,
          makeSelectData,
          makeSelectLoading,
          makeSelectError
       } from 'containers/App/selectors';

import ToolsViewOptions from 'containers/ToolsViewOptions';
import ToolsSortOptions from 'containers/ToolsSortOptions';
import ToolTypeArea from 'containers/ToolTypeArea';

import { LeftSection,
         Stage } from 'components/HomePage/Layout';

import ClearButton from 'components/ClearButton';

import { LeftHeader, LeftContainer } from 'components/HomePage';

import { loadData } from '../App/actions';
import makeSelectHomePage, { makeSelectSearchFieldValue, makeSelectToolView, makeSelectAllTools, isToolsShown, makeSortedTools, makeSelectLanguage } from './selectors';

import SearchResultsContainer from 'components/HomePage/SearchResultsContainer';
import Container from 'components/HomePage/Container' ;

import ToolList from './ToolList';
import BlockViewItem from './BlockViewItem';
import ListViewItem from './ListViewItem';
import Header from './Header';
import MobileHeader from './MobileHeader';
import staticText from './staticText';


const TOP=0,MIDDLE=1,BOTTOM=2;

const HeaderContainer = styled.div`
  display: block;
  @media(max-width: 700px) {
    display: none;
  }
`;
const MobileHeaderContainer = styled.div`
  display: none;
  @media(max-width: 700px) {
    display: block;
  }
`;
export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
  }


  componentDidMount() {
    if (!this.props.tools) {
      this.props.onPageLoad();
    }
  }

  getViewMode() {
    if (this.props.params.label !== undefined &&
        this.props.params.label !== '' &&
        (this.props.params.filter === 'search' || this.props.params.filter == 'tag') ) {
      return ListViewItem;
    }

    return this.props.viewTool === BLOCK_VIEW ? BlockViewItem : ListViewItem;
  }

  handleClearSearch() {
    this.props.dispatch(push('/'));
  }

  getSearchResultsHeader() {

    if (!this.props.params.filter || this.props.params.filter !== 'search' || !this.props.params.label) return;

    return (
      <SearchResultsContainer>
        <LanguageThemeProvider>
          <ContentBlock>
            <span>
              <TranslatableStaticText {...staticText.searchResults} values={{query: this.props.params.label, count: this.props.sorted ? this.props.sorted.length : 0 }} />
            </span>
          </ContentBlock>
        </LanguageThemeProvider>
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


;    return (
      <LanguageThemeProvider>
        <Container
            dir={this.getDirection()}
            full={this.props.params.filter !== 'type'}
            isStory = {this.props.params.label === 'story'}
            >
          <Helmet
            title="BeautifulRising"
            meta={[
              { name: 'description', content: 'BeautifulRising' },
            ]}
          />
          <LeftSection lang={lang}>
            <ToolTypeArea lang={lang} params={this.props.params} />
          </LeftSection>
          <Stage lang={lang}>
            <HeaderContainer>
              <Header lang={lang} {...this.props}/>
            </HeaderContainer>
            <MobileHeaderContainer>
              <MobileHeader lang={lang} {...this.props} />
            </MobileHeaderContainer>
            {this.getSearchResultsHeader()}
            <ToolList>
              { this.props.sorted ?
                  this.props.sorted.map((tool, index) => {
                    return (
                      <ListItem
                            index={index + 1}
                            lang={this.props.language} {...tool}
                            key={tool['document_id']}
                            />)
                  }) : null }
            </ToolList>
          </Stage>
        </Container>
      </LanguageThemeProvider>
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
    showTools: isToolsShown(state, props),
    searchText: makeSelectSearchFieldValue(state, props)
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
