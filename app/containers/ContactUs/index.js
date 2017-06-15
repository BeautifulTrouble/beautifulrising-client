/*
 *
 * ContactUs
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectContactUs from './selectors';
import messages from './messages';
import { sendSubscription } from './actions';

const Header = styled.h3``;
export class ContactUs extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      email: 'rapi@progcode.org'
    };
  }

  renderForm() {
    return (
      <form onSubmit={this.props.onSubmitForm.bind(this)}>
        <button>Submit</button>
      </form>
    );
  }

  renderResponse() {
    return (
      <div>Complete</div>
    )
  }
  render() {
    return (
      <div>
        <Header>
          <FormattedMessage {...messages.header} />
        </Header>

        { !this.props.ContactUs.complete ? this.renderForm() : this.renderResponse() }
      </div>
    );
  }
}

ContactUs.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ContactUs: makeSelectContactUs(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(sendSubscription("rapi.castillo@gmail.com"));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);
