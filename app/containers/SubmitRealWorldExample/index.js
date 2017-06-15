/*
 *
 * SubmitRealWorldExample
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectSubmitRealWorldExample from './selectors';
import messages from './messages';

import { submitExample } from './actions';

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
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type='text' name='url' placeholder='Put URL here' onChange={this.handleChange.bind(this)} />
        <input type='text' name='title' placeholder='Put Title Here'  onChange={this.handleChange.bind(this)} />
        <textarea name='description' placeholder='put all the things here' onChange={this.handleChange.bind(this)} ></textarea>
        <button>Submit</button>
      </form>
    );
  }

  render() {
    const {formatMessage} = this.props.intl;
    return (
      <div>
        <FormattedMessage {...messages.header} />
        { this.props.realWorldEx.complete ? this.renderComplete() : this.renderForm() }
      </div>
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
