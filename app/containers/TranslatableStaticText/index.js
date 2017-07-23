/*
 *
 * TranslatableStaticText
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectTranslatableStaticText from './selectors';
import _ from 'lodash';

import { loadLanguage } from './actions';

export class TranslatableStaticText extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();
    _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
  }

  //Use to retrieve message from static text
  retrieveMessage() {


    const keys = this.props.id.split(".");
    let message = this.props.staticText.data;
    keys.forEach(key => {
      if (!message) return null;
      message = message[key];
    });

    return message || this.props.defaultMessage;
  }

  buildFromTemplate(message) {
    if (this.props.values) {
      var compiled = _.template(message);
      return compiled(this.props.values);
    }

    return message;
  }

  render() {
    const message = this.retrieveMessage();
    const extrapolate = this.buildFromTemplate(message);

    return (
      <span>{extrapolate}</span>
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
