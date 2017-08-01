/*
 *
 * WhatsHappening
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectWhatsHappening from './selectors';
import { updateLastViewed } from './actions';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

import styled from 'styled-components';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from './staticText'

import Post from './Post';

import { makeSelectAllToolsWithSlugIndex } from 'containers/App/selectors';
import { loadData } from 'containers/App/actions';

const PostList = styled.ul`margin: 0; padding: 0;`;
const PostListItem = styled.li`list-style: none;`;


export class WhatsHappening extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.handlePageLoaded();

    if (this.props.toolsData.size === 0 ) {
      console.log("Loading!")
      this.props.onPageLoad();
    }
  }

  renderPostList() {
    //Filter out the ones that are after the lastUpdate date
    const itemsToShow = this.props.WhatsHappening.data.filter(item => !this.props.WhatsHappening.lastViewed || new Date(item.date) < this.props.WhatsHappening.lastViewed)
    return itemsToShow.map((item, index) =>
      <PostListItem key={item.slug}>
        <Post toolsData={this.props.toolsData} {...item} index={index}/>
      </PostListItem>)
  }

  render() {
    const postList = this.renderPostList();
    // console.log("postList", postList);
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
      </LanguageThemeProvider>
    );
  }
}

WhatsHappening.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  WhatsHappening: makeSelectWhatsHappening(),
  toolsData: makeSelectAllToolsWithSlugIndex()
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
