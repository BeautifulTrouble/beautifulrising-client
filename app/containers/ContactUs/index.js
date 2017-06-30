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

const SubscribeCTA = styled.p`
  font-size: ${p=>p.theme.ar?'13px':'14px'};
  line-height: ${p=>p.theme.ar?'24px':'22px'};
`;
const FormContainer = styled.div`
  border: 1px solid;
  font-size: ${p=>p.theme.ar?'13px':'14px'};
  line-height: ${p=>p.theme.ar?'24px':'22px'};
  padding: 8px;
  &::after {
    content: '';
    display: block;
    clear: both;
  }

  input[type=email] {
    width: calc(100% - 70px);
    outline: none;
    padding: 2px;
    float: ${p=>p.ar?'right':'left'};
    text-align: ${p=>p.ar?'right':'left'};
  }
  button {
    outline: none;
    width: 70px;
    text-align: ${p=>p.ar?'left':'right'};
    float: ${p=>p.ar?'right':'left'};
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: bold;
    color: #828486;
  }
`;

const InputEmail = styled.input``;
const SubmitButton = styled.button``;
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
      <FormContainer ar={locale==='ar'}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <InputEmail type='email' name='email' onChange={this.handleChange.bind(this)} placeholder='samir@gmail.com'/>
          <SubmitButton>
            <FormattedMessage {...messages.submit} />
          </SubmitButton>
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
    const { locale } = this.props.intl;
    return (
      <ThemeProvider theme={{ar: locale==='ar', lang: locale }}>
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
            <SubscribeCTA>
              <FormattedMessage {...messages.subscribe} />
            </SubscribeCTA>
          </div>

            { !this.props.ContactUs.complete ? this.renderForm() : this.renderResponse() }

        </MenuBlock>
      </ThemeProvider>
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
