/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { injectIntl } from 'react-intl';
import Page from 'components/Page';
import Header from 'containers/Header';
import Body from 'components/Body';
import Tools from 'containers/Tools';
import Footer from 'containers/Footer';
import LanguageChanger, { MobileLanguageChanger } from 'containers/LanguageChanger';
import OnboardingModal from 'containers/OnboardingModal';
import { isShowTools, makeSelectLanguage, makeSelectStaticText, makeSelectWhatsHappening } from './selectors';
import { isOnboarded } from 'containers/OnboardingModal/selectors';
import { loadLanguage } from 'containers/TranslatableStaticText/actions';
import { loadWhatsHappening } from 'containers/WhatsHappening/actions';
//Themes

const Content = styled.section`
min-height: 80vh;

&::after {
  content: ' ';
  display: block;
  clear: both;
}`;

class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  componentDidMount() {

    // TODO Load language if feasible


    if (!this.props.staticText) {
      this.props.onLanguageLoad()
    }


    // if (!this.props.whatsHappening) {
    this.props.initializeWhatsHappening()
    // }
  }

  render() {
    const theme = {lang: this.props.language};

    return (
      <ThemeProvider theme={theme}>
        <Page>
          <OnboardingModal isOpen={!this.props.isOnboarded} />
          <LanguageChanger />
          <Header lang={this.props.language} />
          <Body showTools={this.props.isShowTools} lang={this.props.language} >
            <Tools />
            <Content>
              {React.Children.toArray(this.props.children)}
            </Content>
            <Footer />
          </Body>
        </Page>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isOnboarded: isOnboarded(),
  isShowTools: isShowTools(),
  language: makeSelectLanguage(),
  staticText: makeSelectStaticText(),
  whatsHappening: makeSelectWhatsHappening()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLanguageLoad: function() {
      dispatch(loadLanguage())
    },
    initializeWhatsHappening: function() {
      dispatch(loadWhatsHappening())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(App));
