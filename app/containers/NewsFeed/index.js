/*
 *
 * NewsFeed
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import Immutable, { Map, List } from 'immutable';

import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

import SubmitNewsFeed from 'containers/SubmitNewsFeed';
import TranslatableStaticText from 'containers/TranslatableStaticText';

import makeSelectNewsFeed from './selectors';
import staticText from './staticText';
import NewsFeedItem from './NewsFeedItem';
import FacebookFeedItem from './FacebookFeedItem';

import { WEBSOCKET_URL } from './constants';
import { FACEBOOK_FEED, TWITTER_FEED } from 'containers/Tools/constants';

import Container from 'components/NewsFeed/Container';
import NewsFeedArea from 'components/NewsFeed/Container';

export class NewsFeed extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.state = { messages : List() }
  }

  componentDidMount() {

  }
  handleData(data) {

  }
  render() {

    const FeedItem = this.props.feedType === TWITTER_FEED ? NewsFeedItem : FacebookFeedItem;
    return (
      <LanguageThemeProvider>
        <Container>
          <ContentBlock>
            <TranslatableStaticText {...staticText.header} />
            <SubmitNewsFeed />
            <NewsFeedArea>
              { this.props.NewsFeed.newsFeed
                  .filter((item) => {
                    if (this.props.feedType === TWITTER_FEED) {
                      return item.type === 'twitter';
                    } else if (this.props.feedType === FACEBOOK_FEED){
                      return item.type === 'facebook';
                    }
                  })
                  .map( (item, idx) => <FeedItem {...item} key={idx}/> )}
            </NewsFeedArea>
          </ContentBlock>
        </Container>
      </LanguageThemeProvider>
    );
  }
}

NewsFeed.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  NewsFeed: makeSelectNewsFeed(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
