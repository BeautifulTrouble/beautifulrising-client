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

  constructor() {
    super();
  }

  //Use to retrieve message from static text

  getStaticMessage({id, defaultMessage}){
    const keys = id.split(".");
    let message = this.props.staticText.data;
    keys.forEach(key => {
      if (!message) return null;
      message = message[key];
    });

    return message || defaultMessage;
  }

  build(message, values) {
    if (values) {
      let splits = message.split(/({{.*?}})/);
      const regex = new RegExp("{{\s*(.*?)\s*}}", "gi");
      return splits.map(item => {
        var match;
        if (match = regex.exec(item)) {
    		    return values[match[1]];
        } else {
    		    return item;
        }
      })
      // var compiled = _.template(message);
      // return compiled(values);
    }

    return message;
  }

  buildMessage({id, defaultMessage}, values) {
    const template = this.getStaticMessage({id, defaultMessage});
    const extrapolate = this.build(template, values);
    return extrapolate;
  }

  render() {
    const message = this.buildMessage({...this.props}, this.props.values);

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


//injectStaticText
const injectStaticText = (WrappedComponent) => {

  class ConnectedStaticText extends React.Component {
    constructor() {
      super();
    }

    getStaticMessage({id, defaultMessage}){

      const keys = id.split(".");
      let message = this.props.staticText.data;
      keys.forEach(key => {
        if (!message) return null;
        message = message[key];
      });

      return message || defaultMessage;
    }

    build(message, values) {
      if (values) {
        let splits = message.split(/({{.*?}})/);
        const regex = new RegExp("{{\s*(.*?)\s*}}", "gi");
        return splits.map(item => {
          var match;
          if (match = regex.exec(item)) {
      		    return values[match[1]];
          } else {
      		    return item;
          }
        })
        // var compiled = _.template(message);
        // return compiled(values);
      }

      return message;
    }

    buildMessage({id, defaultMessage}, values) {

      const template = this.getStaticMessage({id, defaultMessage});
      const extrapolate = this.build(template, values);

      return extrapolate;
    }

    render() {

      return <WrappedComponent
                translatable={{
                    buildMessage: this.buildMessage.bind(this)
                }}
                {...this.props} />
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(ConnectedStaticText);
}

export {injectStaticText};
