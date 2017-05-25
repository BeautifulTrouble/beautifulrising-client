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

import Page from 'components/Page';
import Header from 'components/Header';
import Body from 'components/Body';
import Tools from 'containers/Tools'
import { isShowTools } from './selectors';
//Themes

import { ToolsShown, ToolsHidden } from 'components/ToolsComponents';
class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    const ToolsTheme = this.props.isShowTools ? ToolsShown : ToolsHidden;
    return (
      <Page>
        <Header />
        <Body showTools={this.props.isShowTools}>
          {React.Children.toArray(this.props.children)}
          <Tools />
        </Body>
      </Page>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isShowTools: isShowTools(),
});


export default connect(mapStateToProps)(App);
