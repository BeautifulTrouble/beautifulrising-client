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

const Container = styled.div`
  padding: 5px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid;
`;
const Viewport = styled.div``;
const Form = styled.form`
border: 1px solid;
padding: 8px;

input[type=email] {
  width: calc(100% - 70px);
  outline: none;
  padding: 2px;
}
button {
  outline: none;
  width: 70px;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: underline;
  font-weight: bold;
  color: #828486;
}

`;
const TextInput = styled.input``;
const Button = styled.button``;
const Title = styled.h3`margin: 0; line-height: 1`;
const Message = styled(ContentBlock)`margin: 0 0 10px`;
const FormContainer = styled(ContentBlock)`
`;

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
          <FormContainer>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <TextInput type='email' name='email' onChange={this.handleChange.bind(this)} placeholder='samir@gmail.com'/>
              <Button>
                <FormattedMessage {...messages.submit} />
              </Button>
            </Form>
          </FormContainer>
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
