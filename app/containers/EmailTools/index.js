/*
 *
 * EmailTools
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { emailModules, emailModulesComplete, emailModulesError } from './actions';

import LanguageThemeProvider from 'components/LanguageThemeProvider';
import ContentBlock from 'components/ContentBlock';

import makeSelectEmailTools from './selectors';
import messages from './messages';

const Container =
const Form =
const TextInput =
const Button =
const Title =
const Message =

export class EmailTools extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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

  renderCompleteMessage() {
    return(
      <Message>
        <FormattedMessage {...messages.complete} />
      </Message>
    )
  }

  render() {
    return (
      <LanguageThemeProvider>
        <Container>
          <Title>
            <FormattedMessage {...messages.header} />
          </Title>
          <Message>
            <FormattedMessage {...messages.instruction} />
          </Message>
          {this.props.EmailTools.complete ? this.renderCompleteMessage() : null}
          <ContentBlock>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <TextInput type='email' name='email' onChange={this.handleChange.bind(this)} placeholder='samir@gmail.com'/>
              <Button>
                <FormattedMessage {...messages.submit} />
              </Button>
            </Form>
          </ContentBlock>
        </Container>
      </LanguageThemeProvider>
    );
  }
}

EmailTools.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  EmailTools: makeSelectEmailTools(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onSubmitForm: (evt, email) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(emailModules(email));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailTools);
