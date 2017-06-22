/*
 *
 * SubmitRealWorldExample
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import styled, { ThemeProvider } from 'styled-components';
import makeSelectSubmitRealWorldExample from './selectors';
import messages from './messages';

import { submitExample } from './actions';

const Container = styled.div`
`;
const Form =  styled.form`
  border: 2px solid;
  text-align: ${props=>props.theme.lang === 'ar' ? 'left' : 'right'};
  input {
    border-bottom: 2px solid;
    text-align: ${props=>props.theme.lang === 'ar' ? 'right' : 'left'};
    width: 100%;
    padding: 5px;
  }

  textarea {
    width: 100%;
    padding: 5px;
    resize: none;
    height: 50px;
    outline: none;
  }

  button {
    outline: none;
    cursor: pointer;
    width: 70px;
    text-transform: uppercase;
    text-decoration: underline;
    font-weight: bold;
    color: #828486;
    margin: 5px;
  }
`;
const Header = styled.h3`
  margin: 0;
  text-align: ${props=>props.theme.lang === 'ar' ? 'right' : 'left'};
  font-size: 19px;
  letter-spacing: 0;
  margin-bottom: 5px;
  font-family: 'Avenir Black', 'Kaff Bold', sans-serif;
`;

const TextInput = styled.input`
font-size: 14px;
line-height: 22px;
`;
const TextArea = styled.textarea`
  font-size: 14px;
  line-height: 22px;
`;
const Instruction = styled.p`
  font-size: 14px;
  text-align: ${props=>props.theme.lang === 'ar' ? 'right' : 'left'};
`;
export class SubmitRealWorldExample extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      title: '',
      description: ''
    }
  }

  handleSubmit(evt) {
    this.props.onFormSubmit(evt, { ...this.state });
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
    const {formatMessage} = this.props.intl;
    return (

      <Form onSubmit={this.handleSubmit.bind(this)}>
        <TextInput type='text' name='url'
          placeholder={formatMessage(messages.url)} onChange={this.handleChange.bind(this)} />
        <TextInput type='text' name='title' placeholder={formatMessage(messages.title)}  onChange={this.handleChange.bind(this)} />
        <TextArea name='description' placeholder={formatMessage(messages.description)} onChange={this.handleChange.bind(this)} ></TextArea>
        <button>
          <FormattedMessage {...messages.submit} />
        </button>
      </Form>
    );
  }

  render() {
    const {formatMessage} = this.props.intl;
    return (
      <ThemeProvider theme={{ lang: this.props.intl.locale }}>
        <Container>
          <Header>
            <FormattedMessage {...messages.header} values={{type: this.props.type}} />
          </Header>
          <Instruction>
            <FormattedMessage {...messages.instruction} />
          </Instruction>
          { this.props.realWorldEx.complete ? this.renderComplete() : this.renderForm() }
        </Container>
      </ThemeProvider>
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
    onFormSubmit: (evt, values) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitExample(values));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(SubmitRealWorldExample));
