/*
 *
 * NewsFeed
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Immutable, { Map, List } from 'immutable';

import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

import SubmitNewsFeed from 'containers/SubmitNewsFeed';
import makeSelectNewsFeed from './selectors';
import messages from './messages';
import NewsFeedItem from './NewsFeedItem';
import FacebookFeedItem from './FacebookFeedItem';

import { WEBSOCKET_URL } from './constants';
import { FACEBOOK_FEED, TWITTER_FEED } from 'containers/Tools/constants';

const Container = styled.div`
  padding: 20px;
`;

const NewsFeedArea = styled.ul`
  padding: 0; margin: 0;
`;

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
            <FormattedMessage {...messages.header} />
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
