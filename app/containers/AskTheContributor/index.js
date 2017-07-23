/*
 *
 * AskTheContributor
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FormattedMessage, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Recaptcha from 'react-google-invisible-recaptcha';

import { RECAPTCHA_SITE_KEY } from 'components/CommonComponents/constants';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import ContentBlock from 'components/ContentBlock';

import { ToolLeftArea, ToolsPageLeftHeader, ToolsPageContributor } from 'components/ToolsPageComponents';
import makeSelectAskTheContributor from './selectors';
import { selectAuthor } from 'containers/Author/selectors';
import { askContributorQuestion } from './actions';
import messages from './messages';


import Container from 'components/AskTheContributor/Container';
import Form from 'components/AskTheContributor/Form';
import Header from 'components/AskTheContributor/Header';
import TextArea from 'components/AskTheContributor/TextArea';
import Email from 'components/AskTheContributor/Email';
import SubmitContainer from 'components/AskTheContributor/SubmitContainer';
import Submit from 'components/AskTheContributor/Submit';

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

    const {formatMessage} = this.props.intl;
    return (
      <LanguageThemeProvider>
        <Container>
          <Header>
            <FormattedMessage {...messages.header} />
          </Header>
          <div>
            <ContentBlock>
              <FormattedMessage {...messages.subheader} values={{author: this.props.count > 1 ? 'the authors' : this.props.authors[0].title }}/>
            </ContentBlock>
          </div>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <ContentBlock>
              <TextArea name='question'
                  required={true}
                  onChange={this.handleTextAreaChange.bind(this)} placeholder={formatMessage(messages.questionPlaceholder)}></TextArea>
              <Email name='email'
                  required={true}
                  onChange={this.handleEmailChange.bind(this)} type='email' placeholder={formatMessage(messages.emailPlaceholder)}/>
              <SubmitContainer>
                <Submit>
                  <FormattedMessage {...messages.submit} />
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(AskTheContributor));
