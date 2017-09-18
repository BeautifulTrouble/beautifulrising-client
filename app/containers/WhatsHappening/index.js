/*
 *
 * WhatsHappening
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Link } from 'react-router';
import { createStructuredSelector } from 'reselect';

import LanguageThemeProvider from 'components/LanguageThemeProvider';
import TranslatableStaticText from 'containers/TranslatableStaticText';
import { loadData } from 'containers/App/actions';

import makeSelectWhatsHappening, { makeSelectToolsAsSlug } from './selectors';
import { updateLastViewed } from './actions';
import staticText from './staticText'
import Post from './Post';
import Bell from './Bell';
import Counter from './Counter';

const PostList = styled.ul`margin: 0; padding: 0;`;
const PostListItem = styled.li`list-style: none;`;
const POST_PER_PAGE = 3;

const PaginationArea = styled.div`
  width: 100%;
  padding: 20px 0;
  &::after {
    content:' ';
    clear: both;
    display: block;
  }
`;
const WhatHappeningButton = styled(Link)`
  color: #828487;
  text-decoration: underline;
  display: ${p=>p.toShow?'block':'none'};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
`;

const NextButton = styled(WhatHappeningButton)`
  float: right;
`;

const PreviousButton = styled(WhatHappeningButton)`
  float: left;
`;

export class WhatsHappening extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super();

    this.state = { isLast: false };
  }

  componentDidMount() {
    this.props.handlePageLoaded();

    if (this.props.toolsData.size === 0 ) {

      this.props.onPageLoad();
    }
  }
  handleEarlyPage() {
    this.setState({ isLast: false });
  }

  handleLastPage() {
    this.setState({ isLast: true });
  }

  componentWillReceiveProps(nextProps) {

      if (this.props !== undefined && this.props.location !== undefined
          && this.props.location.query  !== undefined
          && this.props.location.query.page != nextProps.location.query.page) {
        const pageCount = nextProps.location.query.page;
        if((POST_PER_PAGE * pageCount) + POST_PER_PAGE <= this.props.WhatsHappening.data.length ) {
          this.setState({ isLast: false });
        } else {
          this.setState({ isLast: true })
        }
      }

  }

  renderPostList(page = 0) {
    //Filter out the ones that are after the lastUpdate date
    if (!this.props.WhatsHappening.data) return null;

    let targetDataSet = null;

    if((POST_PER_PAGE * page) + POST_PER_PAGE + 1 <= this.props.WhatsHappening.data.length ) {
      targetDataSet = this.props.WhatsHappening.data.slice(POST_PER_PAGE * page, POST_PER_PAGE * page + POST_PER_PAGE);
    } else {

      targetDataSet = this.props.WhatsHappening.data.slice(POST_PER_PAGE * page, this.props.WhatsHappening.data.length - 1);
    }


    //
    // const itemsToShow = this.props.WhatsHappening.data.filter(item => !this.props.WhatsHappening.lastViewed || new Date(item.date) < this.props.WhatsHappening.lastViewed)
    return targetDataSet.map((item, index) =>
      <PostListItem key={item.slug}>
        <Post toolsData={this.props.toolsData} {...item} index={index}/>
      </PostListItem>)
  }

  render() {

    const pageFocus = this.props.location.query.page ? parseInt(this.props.location.query.page) : 1;
    const postList = this.renderPostList(pageFocus - 1);


    //
    return (
      <LanguageThemeProvider>
        <Helmet
          title="BeautifulRising – What's Happening"
          meta={[
            { name: 'description', content: 'What\'s Happening' },
          ]}
        />
        <h1>
          <TranslatableStaticText {...staticText.whatsHappeningHeader} />
        </h1>
        <PostList>
          {postList}
        </PostList>

        <PaginationArea>
          <PreviousButton to={`/whats-happening?page=${pageFocus - 1}`} toShow={pageFocus > 1}>Previous</PreviousButton>
          <NextButton to={`/whats-happening?page=${pageFocus + 1}`} toShow={!this.state.isLast}>Next</NextButton>
        </PaginationArea>
      </LanguageThemeProvider>
    );
  }
}

WhatsHappening.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  WhatsHappening: makeSelectWhatsHappening(),
  toolsData: makeSelectToolsAsSlug()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handlePageLoaded: () =>{
      dispatch(updateLastViewed());
    },
    handleShowClick: () => {
      dispatch(updateLastViewed());
    },
    onPageLoad: (evt) => {
      dispatch(loadData());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WhatsHappening);
export { Bell, Counter };
