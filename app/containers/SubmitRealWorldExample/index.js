/*
 *
 * SubmitRealWorldExample
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import makeSelectSubmitRealWorldExample from './selectors';
import messages from './messages';

import { submitExample } from './actions';

const Container = styled.div`
`;
const Form =  styled.form`
  border: 3px solid;
  text-align: right;
  input {
    border-bottom: 3px solid;
    text-align: left;
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
  text-align: left;
  font-size: 24px;
  letter-spacing: 0;
  margin-bottom: 5px;
  font-family: 'Avenir Black', sans-serif;
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
        <input type='text' name='url'
          placeholder={formatMessage(messages.url)} onChange={this.handleChange.bind(this)} />
        <input type='text' name='title' placeholder={formatMessage(messages.title)}  onChange={this.handleChange.bind(this)} />
        <textarea name='description' placeholder={formatMessage(messages.description)} onChange={this.handleChange.bind(this)} ></textarea>
        <button>Submit</button>
      </Form>
    );
  }

  render() {
    const {formatMessage} = this.props.intl;
    return (
      <Container>
        <Header>
          <FormattedMessage {...messages.header} values={{type: this.props.type}} />
        </Header>
        { this.props.realWorldEx.complete ? this.renderComplete() : this.renderForm() }
      </Container>
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