/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';
import { IntlProvider } from 'react-intl';

import { makeSelectLocale } from './selectors';

export class LanguageProvider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    //
    //
    // if (!this.props.languageData) {
    //   this.props.onLanguageLoad()
    // }
  }

  render() {
    return (
      <IntlProvider
            locale={this.props.locale}
            key={this.props.locale}
            messages={{...this.props.messages[this.props.locale] /* TODO Reexamine this, ...this.props.languageData */}}>

        {React.Children.only(this.props.children)}
      </IntlProvider>
    );
  }

}

LanguageProvider.propTypes = {
  locale: React.PropTypes.string,
  messages: React.PropTypes.object,
  children: React.PropTypes.element.isRequired,
};


const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
  // languageData: makeSelectLanguageData()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider);
