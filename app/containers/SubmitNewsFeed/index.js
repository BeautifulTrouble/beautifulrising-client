/*
 *
 * SubmitNewsFeed
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import Recaptcha from 'react-google-invisible-recaptcha';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import { RECAPTCHA_SITE_KEY } from 'components/CommonComponents/constants';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import Header from 'components/SubmitNewsFeed/Header';
import FormContainer from 'components/SubmitNewsFeed/FormContainer';

import makeSelectSubmitNewsFeed from './selectors';
import { submitHashtag } from './actions';
import staticText from './staticText';

const Form = styled.form`
  display: flex;
`;
const FormItem = styled.span`
  flex-grow: ${p=>p.grow || 0};
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
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    this.recaptcha.execute();
  }

  handleRecaptcha(resp) {

    this.props.onFormSubmit({...this.state, captcha: resp});
  }

  renderForm() {
    return (
      <FormContainer>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormItem grow={1}>
            <input type='hashtag' name='hashtag' onChange={this.handleChange.bind(this)} placeholder='#'/>
          </FormItem>
          <FormItem>
            <button>
              <TranslatableStaticText {...staticText.submit} />
            </button>
          </FormItem>
          <Recaptcha
            ref={ ref=> this.recaptcha = ref }
            sitekey={ RECAPTCHA_SITE_KEY }
            onResolved={this.handleRecaptcha.bind(this)}
          />
        </Form>
      </FormContainer>

    );
  }

  render() {
    const { locale } = this.props.intl;
    return (
      <LanguageThemeProvider>
        <Header>
          <TranslatableStaticText {...staticText.header} />
        </Header>
        { this.renderForm() }
      </LanguageThemeProvider>
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
    onFormSubmit: (options) => {
      dispatch(submitHashtag(options));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(SubmitNewsFeed));
