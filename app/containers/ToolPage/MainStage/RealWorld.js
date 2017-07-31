/*
 *
 * ToolPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Isvg from 'react-inlinesvg';
import styled, { ThemeProvider } from 'styled-components';

import { RealWorldIcon } from 'components/ToolsComponents';
import LatinThemeProvider from 'components/LatinThemeProvider';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import { LearnMoreList, ToolMainContent,
        ToolMainContentHeader, RealWorldContainer,
        RealWorldHeader, RealWorldToggle, RealWorldItems } from 'components/ToolsPageComponents';
import SubmitRealWorldExample from 'containers/SubmitRealWorldExample';
import RealWorldItem from 'components/RealWorldItem';

import RealWorldIconImage from 'assets/images/icons/real-world.svg';
import ArrowIcon from 'assets/images/icons/arrow.svg';

import { CollapsingHeader, ContentContainer, CollapsingContent } from 'components/ToolPage/Main';
import CollapsingSection from 'components/CollapsingSection';
import ContentBlock from 'components/ContentBlock';

// import { makeSelectToolById } from 'containers/Tool/selectors';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from '../staticText';

class RealWorld extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true
    }
  }
  generateRealWorldList() {

    if (!this.props['real-world-examples']
        || this.props['real-world-examples'].length == 0)
      return null;

    return (
      <div show={this.state.isCollapsed}>
        {this.props['real-world-examples'].map((item, index)=>(<RealWorldItem key={index} pos={index} {...item} type={this.props.type} toolImage={this.props.image}/>))}
      </div>
    )

  }
  render() {
    return (

        <CollapsingSection
          isShown={true}
          header={(
              <CollapsingHeader>
                <TranslatableStaticText {...staticText.realWorldExamplesOf} values={{title: this.props.title}}/>
              </CollapsingHeader>)}>
          <CollapsingContent>
            <LatinThemeProvider>
              <RealWorldItems show={this.state.isCollapsed}>
                {this.generateRealWorldList()}
                <SubmitRealWorldExample {...this.props} />
              </RealWorldItems>
            </LatinThemeProvider>
          </CollapsingContent>
        </CollapsingSection>

    );
  }
}

export default RealWorld;
