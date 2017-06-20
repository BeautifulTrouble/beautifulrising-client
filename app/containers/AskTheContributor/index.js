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
import makeSelectAskTheContributor from './selectors';
import { askContributorQuestion } from './actions';
import messages from './messages';


const Container = styled.div`
  width: 100%;
  border: 2px solid black;
  text-align: left;
`;
const Header = styled.h3``;
const Form = styled.form``;
const TextArea = styled.textarea`border: 0; border-bottom: 2px solid black;`;
const Email = styled.input`border: 0; border-bottom: 2px solid black;`;
const SubmitContainer = styled.div`text-align: right;`;
const Submit = styled.button``;

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
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <TextArea name='question' onChange={this.handleTextAreaChange.bind(this)} placeholder={formatMessage(messages.questionPlaceholder)}></TextArea>
          <Email name='email' onChange={this.handleEmailChange.bind(this)} type='email' placeholder={formatMessage(messages.emailPlaceholder)}/>
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
};

const mapStateToProps = createStructuredSelector({
  AskTheContributor: makeSelectAskTheContributor(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onFormSubmit: (email, question, evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitExample(values));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(AskTheContributor));
