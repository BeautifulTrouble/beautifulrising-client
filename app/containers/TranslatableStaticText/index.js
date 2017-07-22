/*
 *
 * TranslatableStaticText
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectTranslatableStaticText from './selectors';

import { loadLanguage } from './actions';

export class TranslatableStaticText extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  //Use to retrieve message from static text
  retrieveMessage() {


    const keys = this.props.id.split(".");
    let message = this.props.staticText.data;
    keys.forEach(key => {
      if (!message) return null;
      message = message[key];
    });

    return message;
  }

  render() {
    const message = this.retrieveMessage();

    return (
      <span>{message}</span>
    );
  }
}

TranslatableStaticText.propTypes = {
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

const mapStateToProps = createStructuredSelector({
  staticText: makeSelectTranslatableStaticText(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TranslatableStaticText);
