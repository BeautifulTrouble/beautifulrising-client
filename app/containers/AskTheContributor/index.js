/*
 *
 * AskTheContributor
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Recaptcha from 'react-google-invisible-recaptcha';

import { ToolLeftArea, ToolsPageLeftHeader, ToolsPageContributor } from 'components/ToolsPageComponents';
import { selectAuthor } from 'containers/Author/selectors';
import {injectStaticText} from 'containers/TranslatableStaticText';

import ContentBlock from 'components/ContentBlock';
import { RECAPTCHA_SITE_KEY } from 'components/CommonComponents/constants';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import Container from 'components/AskTheContributor/Container';
import Form from 'components/AskTheContributor/Form';
import Header from 'components/AskTheContributor/Header';
import TextArea from 'components/AskTheContributor/TextArea';
import Email from 'components/AskTheContributor/Email';
import SubmitContainer from 'components/AskTheContributor/SubmitContainer';
import Submit from 'components/AskTheContributor/Submit';

import { askContributorQuestion } from './actions';
import makeSelectAskTheContributor from './selectors';
import staticText from './staticText';

export class AskTheContributor extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      question: '',
      authors: props.authors
    }
  }
  handleTextAreaChange(evt) {
    this.setState({ question: evt.target.value })
  }
  handleEmailChange(evt) {
    this.setState({ email: evt.target.value })
  }
  handleSubmit(evt) {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    this.recaptcha.execute();
  }
  handleRecaptcha(resp) {
    this.props.onFormSubmit({...this.state, captcha: resp});
  }

  render() {

    const { buildMessage } = this.props.translatable;
    return (
      <LanguageThemeProvider>
        <Container>
          <Header>
            <TranslatableStaticText {...staticText.header} />
          </Header>
          <div>
            <ContentBlock>
              <TranslatableStaticText {...staticText.subheader} values={{name: (this.props.count > 1 ? 'the authors' : this.props.author.title ) }}/>
            </ContentBlock>
          </div>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <ContentBlock>
              <TextArea name='question'
                  required={true}
                  onChange={this.handleTextAreaChange.bind(this)} placeholder={buildMessage(staticText.questionPlaceholder)}></TextArea>
              <Email name='email'
                  required={true}
                  onChange={this.handleEmailChange.bind(this)} type='email' placeholder={buildMessage(staticText.emailPlaceholder)}/>
              <SubmitContainer>
                <Submit>
                  <TranslatableStaticText {...staticText.submit} />
                </Submit>
                <Recaptcha
                  ref={ ref=> this.recaptcha = ref }
                  sitekey={ RECAPTCHA_SITE_KEY }
                  onResolved={this.handleRecaptcha.bind(this)}
                />
              </SubmitContainer>
            </ContentBlock>
          </Form>
        </Container>
      </LanguageThemeProvider>
    );
  }
}

AskTheContributor.propTypes = {
  dispatch: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired
};

const mapStateToProps = (state, props) => {
  return {
    author: selectAuthor(state, props)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onFormSubmit: (options) => {
      dispatch(askContributorQuestion(options));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(injectStaticText(AskTheContributor)));
