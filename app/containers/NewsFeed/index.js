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

import SubmitNewsFeed from 'containers/SubmitNewsFeed';
import makeSelectNewsFeed from './selectors';
import messages from './messages';
import NewsFeedItem from './NewsFeedItem';

import { WEBSOCKET_URL } from './constants';

const Container = styled.div`
  padding: 20px;
  font-size: 14px;
  line-height: 22px;
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
    console.log(data, Immutable(data));
  }
  render() {
    return (
      <Container>
          <FormattedMessage {...messages.header} />
          <SubmitNewsFeed />
        <NewsFeedArea>
          { this.props.NewsFeed.newsFeed.map( (item, idx) => <NewsFeedItem {...item} key={idx}/> )}
        </NewsFeedArea>
      </Container>
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
