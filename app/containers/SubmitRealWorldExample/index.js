/*
 *
 * SubmitRealWorldExample
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Recaptcha from 'react-google-invisible-recaptcha';
import styled from 'styled-components';

import TranslatableStaticText, { injectStaticText } from 'containers/TranslatableStaticText';
import { RECAPTCHA_SITE_KEY } from 'components/CommonComponents/constants';
import SmallHeaderBlock from 'components/SmallHeaderBlock';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

import makeSelectSubmitRealWorldExample from './selectors';
import { submitExample } from './actions';

import Form from 'components/SubmitRealWorldExample/Form';
import Header from 'components/SubmitRealWorldExample/Header';
import TextInput from 'components/SubmitRealWorldExample/TextInput';
import TextArea from 'components/SubmitRealWorldExample/TextArea';

import staticText from './staticText';

const SubmitExampleContainer = styled.div`
  margin-top: 12px;
  width: 470px;

  @media(max-width: 700px) {
    width: 100%;
  }
`;

export class SubmitRealWorldExample extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

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
    return (

        <SubmitExampleContainer>
        <LanguageThemeProvider>
          <Header>
            <TranslatableStaticText {...staticText.header} values={{type: this.props.type}} />
          </Header>
          <div>
            <ContentBlock>
              <TranslatableStaticText {...staticText.instruction} />
            </ContentBlock>
          </div>
          { this.props.realWorldEx.complete ? this.renderComplete() : this.renderForm() }
          </LanguageThemeProvider>
        </SubmitExampleContainer>
    );
  }
}

SubmitRealWorldExample.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  realWorldEx: makeSelectSubmitRealWorldExample(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onFormSubmit: (captchaResponse, values) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitExample({...values, captcha: captchaResponse}));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectStaticText(SubmitRealWorldExample));
