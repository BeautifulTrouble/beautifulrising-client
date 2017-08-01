/*
 *
 * WhatsHappening
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectWhatsHappening from './selectors';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from './staticText'

export class WhatsHappening extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    console.log(this.props.WhatsHappening);
    return (
      <LanguageThemeProvider>
        <Helmet
          title="BeautifulRising – What's Happening"
          meta={[
            { name: 'description', content: 'What\'s Happening' },
          ]}
        />
        <h1>
          <TranslatableStaticText {...staticText.whatsHappeningHeader} />
        </h1>
      </LanguageThemeProvider>
    );
  }
}

WhatsHappening.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  WhatsHappening: makeSelectWhatsHappening(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WhatsHappening);
