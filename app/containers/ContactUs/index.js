/*
 *
 * ContactUs
 *
 */

import React, { PropTypes } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router';
import Isvg from 'react-inlinesvg';
import TwitterIcon from 'assets/images/icons/twitter.svg';
import FacebookIcon from 'assets/images/icons/facebook.svg';

import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectContactUs from './selectors';
import messages from './messages';
import { sendSubscription } from './actions';

import TranslatableStaticText from 'containers/TranslatableStaticText';

import MenuLink from 'components/MenuLink';
import MenuBlock from 'components/MenuBlock';
import MenuList from 'components/MenuList';
import MenuListItem from 'components/MenuListItem';
import MenuTitle from 'components/MenuTitle';

import Header from 'components/MenuContactUs/Header';
import EmailLink from 'components/MenuContactUs/EmailLink';
import FormContainer from 'components/MenuContactUs/FormContainer';
import SocialLink from 'components/MenuContactUs/SocialLink';
import SubscribeCTA from 'components/MenuContactUs/SubscribeCTA';

import LanguageThemeProvider from 'components/LanguageThemeProvider';
import key from './constants';

export class ContactUs extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  handleChange(evt) {
    this.setState({ email: evt.target.value });
  }

  handleSubmit(evt) {
    this.props.onSubmitForm(evt, this.state.email);
  }
  renderForm() {
    const {locale} = this.props.intl;
    return (
      <LanguageThemeProvider>
        <FormContainer>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type='email' name='email' onChange={this.handleChange.bind(this)} placeholder='samir@gmail.com'/>
            <button>
              <TranslatableStaticText text={key.KEY_CONTACT_US_SUBMIT} />
            </button>
          </form>
        </FormContainer>
      </LanguageThemeProvider>

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

    const { locale } = this.props.intl;
    return (
      <LanguageThemeProvider>
        <MenuBlock>
          <MenuTitle>
            <TranslatableStaticText text={key.KEY_CONTACT_US_HEADER} />
          </MenuTitle>
          <EmailLink to='mailto:info@beautifulrising.org'>info@beautifulrising.org</EmailLink>
          <div>
            <SocialLink to='https://twitter.com/beautrising' target='_blank'>
              <Isvg src={TwitterIcon} />
            </SocialLink>
            <SocialLink to='https://facebook.com/beautifulrising' target='_blank'>
              <Isvg src={FacebookIcon} />
            </SocialLink>
            <SubscribeCTA>
              <TranslatableStaticText text={key.KEY_CONTACT_US_SUBSCRIBE} />
            </SubscribeCTA>
          </div>

            { !this.props.ContactUs.complete ? this.renderForm() : this.renderResponse() }
        </MenuBlock>
      </LanguageThemeProvider>
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
    onSubmitForm: (evt, email) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(sendSubscription(email));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ContactUs));
