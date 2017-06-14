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
import styled from 'styled-components';
import Page from 'components/Page';
import Header from 'components/Header';
import Body from 'components/Body';
import Tools from 'containers/Tools';
import Footer from 'components/Footer';
import LanguageChanger from 'containers/LanguageChanger';
import OnboardingModal from 'containers/OnboardingModal';
import { isShowTools } from './selectors';

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

  render() {
    return (
      <Page>
        <OnboardingModal isOpen={false} />
        <LanguageChanger />
        <Header />
        <Body showTools={this.props.isShowTools}>
          <Tools />
          <Content>
            {React.Children.toArray(this.props.children)}
          </Content>
          <Footer />
        </Body>
      </Page>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isShowTools: isShowTools(),
});


export default connect(mapStateToProps)(App);
