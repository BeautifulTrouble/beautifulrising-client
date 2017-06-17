/*
 *
 * SubmitNewsFeed
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import makeSelectSubmitNewsFeed from './selectors';
import messages from './messages';

const Header = styled.div`
  font-weight: bold;
  color: black;
  font-size: 14px;
  line-height: 22px;
  margin: 10px 0;
`;

const FormContainer = styled.div`
  border: 1px solid;
  font-size: 14px;
  padding: 8px;

  input[type=email] {
    width: calc(100% - 50px);
    outline: none;
    padding: 2px;
  }
  button {
    outline: none;
    width: 40px;
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: bold;
    color: #828486;
  }
`;
export class SubmitNewsFeed extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      hashtag: ''
    };
  }

  handleChange(evt) {
    this.setState({ hashtag: evt.target.value });
  }

  handleSubmit(evt) {
    this.props.onSubmitForm(evt, this.state.email);
  }
  renderForm() {
    return (
      <FormContainer>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='hashtag' name='hashtag' onChange={this.handleChange.bind(this)} placeholder='#'/><button>
            <FormattedMessage {...messages.submit} />
          </button>
        </form>
      </FormContainer>

    );
  }

  render() {
    return (
      <div>
        <Header>
          <FormattedMessage {...messages.header} />
          { this.renderForm() }
        </Header>
      </div>
    );
  }
}

SubmitNewsFeed.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SubmitNewsFeed: makeSelectSubmitNewsFeed(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitNewsFeed);
