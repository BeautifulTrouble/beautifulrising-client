/*
 *
 * SubmitResource
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Recaptcha from 'react-google-invisible-recaptcha';
import styled from 'styled-components';
import Markdown from 'react-markdown';
import TranslatableStaticText, { injectStaticText } from 'containers/TranslatableStaticText';
import { RECAPTCHA_SITE_KEY } from 'components/CommonComponents/constants';
import SmallHeaderBlock from 'components/SmallHeaderBlock';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

import makeSelectSubmitResource from './selectors';
import { submitResource } from './actions';

import Form from 'components/SubmitResource/Form';
import Header from 'components/SubmitResource/Header';
import TextInput from 'components/SubmitResource/TextInput';
import TextArea from 'components/SubmitResource/TextArea';

import staticText from './staticText';

const SubmitResourceContainer = styled.div`
  margin-top: 36px;
  width: 475px;
  display: inline-block;

  @media(max-width: 700px) {
    width: 100%;
    padding: 10px;
  }
`;

export class SubmitResource extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      title: '',
      description: '',
      documentLink: props.document_link,
      documentTitle: props.document_title
    }
  }

  handleSubmit(evt) {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    // this.props.onFormSubmit(evt, { ...this.state });

    if (this.state.url === '' ||
        this.state.title === '' ||
        this.state.description === '') {

      this.recaptcha.reset()
    } else {

      this.recaptcha.execute();

    }
  }

  handleRecaptcha(captchaResponse) {


    this.props.onFormSubmit(captchaResponse, { ...this.state });
  }

  handleChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;

    this.setState({ [name]: value });
  }

  renderComplete() {
    return (
      <span>Thanks for submitting!</span>
    )
  }

  renderForm() {
    const {buildMessage} = this.props.translatable;
    return (

      <Form onSubmit={this.handleSubmit.bind(this)}>
        <TextInput type='text' name='url'
          placeholder={buildMessage(staticText.url)} onChange={this.handleChange.bind(this)} />
        <TextInput type='text' name='title' placeholder={buildMessage(staticText.title)}  onChange={this.handleChange.bind(this)} />
        <TextArea name='description' placeholder={buildMessage(staticText.description)} onChange={this.handleChange.bind(this)} ></TextArea>
        <button>
          <TranslatableStaticText {...staticText.submit} />
        </button>
        <Recaptcha
          ref={ ref=> this.recaptcha = ref }
          sitekey={ RECAPTCHA_SITE_KEY }
          onResolved={this.handleRecaptcha.bind(this)}
        />
      </Form>
    );
  }

  render() {
    const {buildMessage} = this.props.translatable;
    return (

        <SubmitResourceContainer>
          <LanguageThemeProvider>
            <Header>
              <Markdown source={buildMessage(staticText.header)} />
            </Header>
            { this.props.realWorldEx.complete ? this.renderComplete() : this.renderForm() }
          </LanguageThemeProvider>
        </SubmitResourceContainer>
    );
  }
}

SubmitResource.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  realWorldEx: makeSelectSubmitResource(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onFormSubmit: (captchaResponse, values) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitResource({...values, captcha: captchaResponse}));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectStaticText(SubmitResource));
