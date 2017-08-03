/*
 *
 * WhatsHappening
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { createStructuredSelector } from 'reselect';

import LanguageThemeProvider from 'components/LanguageThemeProvider';
import TranslatableStaticText from 'containers/TranslatableStaticText';
import { loadData } from 'containers/App/actions';

import makeSelectWhatsHappening, { makeSelectToolsAsSlug } from './selectors';
import { updateLastViewed } from './actions';
import staticText from './staticText'
import Post from './Post';
import Bell from './Bell';

const PostList = styled.ul`margin: 0; padding: 0;`;
const PostListItem = styled.li`list-style: none;`;


export class WhatsHappening extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.handlePageLoaded();

    if (this.props.toolsData.size === 0 ) {

      this.props.onPageLoad();
    }
  }

  renderPostList() {
    //Filter out the ones that are after the lastUpdate date
    if (!this.props.WhatsHappening.data) return null;
    
    const itemsToShow = this.props.WhatsHappening.data.filter(item => !this.props.WhatsHappening.lastViewed || new Date(item.date) < this.props.WhatsHappening.lastViewed)
    return itemsToShow.map((item, index) =>
      <PostListItem key={item.slug}>
        <Post toolsData={this.props.toolsData} {...item} index={index}/>
      </PostListItem>)
  }

  render() {
    const postList = this.renderPostList();
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
export { Bell };
