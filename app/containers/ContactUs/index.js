/*
 *
 * ContactUs
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import Isvg from 'react-inlinesvg';
import TwitterIcon from 'assets/images/icons/twitter.svg';
import FacebookIcon from 'assets/images/icons/facebook.svg';

import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectContactUs from './selectors';
import messages from './messages';
import { sendSubscription } from './actions';

import MenuLink from 'components/MenuLink';
import MenuBlock from 'components/MenuBlock';
import MenuList from 'components/MenuList';
import MenuListItem from 'components/MenuListItem';
import MenuTitle from 'components/MenuTitle';

const Header = styled.h3``;
const SocialLink = styled(Link)`text-decoration: none;`;
const EmailLink = styled(MenuLink)`
  text-transform: none;
  font-weight: none;
`;

const FormContainer = styled.div`
  border: 1px solid;
  font-size: 14px;
  padding: 8px;

  input[type=email] {
    width: calc(100% - 70px);
    outline: none;
    padding: 2px;
  }
  button {
    outline: none;
    width: 70px;
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: bold;
    color: #828486;
  }
`;

export class ContactUs extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      email: 'rapi@progcode.org'
    };
  }

  renderForm() {
    return (
      <FormContainer>
        <form onSubmit={this.props.onSubmitForm.bind(this)}>
          <input type='email' name='email' placeholder='samir@gmail.com'/><button>
            <FormattedMessage {...messages.submit} />
          </button>
        </form>
      </FormContainer>

    );
  }

  renderResponse() {
    return (
      <div>
        <FormattedMessage {...messages.complete} />
      </div>
    )
  }
  render() {
    return (
      <MenuBlock>
        <MenuTitle>
          <FormattedMessage {...messages.header} />
        </MenuTitle>
        <EmailLink to='mailto:info@beautifulrising.org'>info@beautifulrising.org</EmailLink>
        <div>
          <SocialLink to='https://twitter.com/beautrising' target='_blank'>
            <Isvg src={TwitterIcon} />
          </SocialLink>
          <SocialLink to='https://facebook.com/beautifulrising' target='_blank'>
            <Isvg src={FacebookIcon} />
          </SocialLink>
          <p>
            <FormattedMessage {...messages.subscribe} />
          </p>
        </div>

          { !this.props.ContactUs.complete ? this.renderForm() : this.renderResponse() }

      </MenuBlock>
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
