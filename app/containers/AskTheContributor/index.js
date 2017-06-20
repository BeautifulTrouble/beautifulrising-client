/*
 *
 * AskTheContributor
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectAskTheContributor from './selectors';
import messages from './messages';
import styled from 'styled-components';

const Container = styled.div``;
const Header = styled.div``;
const Form = styled.form``;
const TextArea = styled.textarea``;
const Email = styled.input``;
const Submit = styled.button``;

export class AskTheContributor extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {formatMessage} = this.props.intl;
    return (
      <Container>
        <Header>
          <FormattedMessage {...messages.header} />
        </Header>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <TextArea name='question' placeholder={formatMessage(messages.questionPlaceholder)}></TextArea>
          <Email name='email' type='email' placeholder={formatMessage(messages.emailPlaceholder)}/>
          <Submit>
            <FormattedMessage {...messages.submit} />
          </Submit>
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(AskTheContributor));
