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

import { ToolLeftArea, ToolsPageLeftHeader, ToolsPageContributor } from 'components/ToolsPageComponents';
import makeSelectAskTheContributor from './selectors';
import { selectAuthor } from 'containers/Author/selectors';
import { askContributorQuestion } from './actions';
import messages from './messages';


const Container = styled.div`
  width: 100%;
`;
const Form = styled.form`
border: 2px solid black;
text-align: left;
 * { font-size: 14px; line-height: 22px; padding: 3px; }
`;
const Header = styled.h3`
  font-family: 'Avenir Black', 'Kaff Bold', sans-serif;
  letter-spacing: 0;
  line-height: 1;
  font-size: 14px;
  line-height: 20px;
`;
const TextArea = styled.textarea`border: 0; border-bottom: 2px solid black; width: 100%; height: 100px; resize: none;`;
const Email = styled.input`border: 0; border-bottom: 2px solid black; width: 100%;`;
const SubmitContainer = styled.div`text-align: right;`;
const Submit = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  color: #828486;
  text-decoration: underline;
`;
const Subheader = styled.p``;
export class AskTheContributor extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      question: ''
    }
  }
  handleTextAreaChange(evt) {
    this.setState({ question: evt.target.value })
  }
  handleEmailChange(evt) {
    this.setState({ email: evt.target.value })
  }
  handleSubmit(evt) {
    this.props.onFormSubmit(this.state.email, this.state.question, evt);
  }

  render() {

    const {formatMessage} = this.props.intl;
    return (
      <Container>
        <Header>
          <FormattedMessage {...messages.header} />
        </Header>
        <Subheader>
          <FormattedMessage {...messages.subheader} values={{author: this.props.count > 1 ? 'the authors' : this.props.author.title }}/>
        </Subheader>
        <Form onSubmit={this.handleSubmit.bind(this)}>
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
          </SubmitContainer>
        </Form>
      </Container>
    );
  }
}

AskTheContributor.propTypes = {
  dispatch: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired
};

const mapStateToProps = (state, props) => {
  return {
    author: selectAuthor(state, props)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onFormSubmit: (email, question, evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(askContributorQuestion(email, question));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(AskTheContributor));
