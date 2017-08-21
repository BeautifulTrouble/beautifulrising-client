/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled from 'styled-components';
import Markdown from 'react-remarkable';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import ToolTypeAllFull from 'containers/ToolTypeAllFull';
import { injectIntl } from 'react-intl';
import IntroText from 'components/AboutPage/IntroText';
import Introduction from 'components/AboutPage/Introduction';
import AboutSection from 'components/AboutPage/AboutSection';
import VisibilitySensor from 'react-visibility-sensor';

import messages from './messages';

const ToolTypeContainer = styled.div`


  position: relative;

  ${p=>{
    if (p.notClickable) {
      return `
      &::after {
        content: ' ';
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0);
      }
      `
    }
  }}
`;
export class TheToolbox extends React.Component {

  renderHeader() {
    return(
      <VisibilitySensor  onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
        <div>
          <h2>{this.props.header}</h2>
        </div>
      </VisibilitySensor>
    );
  }
  render() {
    const lang = this.props.intl.locale;
    return (
      <LanguageThemeProvider>
        <AboutSection id='whats-inside' name='whats-inside' lang={lang} hideHeader={this.props.hideHeader}>
          { this.props.hideHeader ? null : this.renderHeader() }
          <Introduction>
            <IntroText>
              <Markdown source={this.props.whatsInside}/>
            </IntroText>
          </Introduction>
          <ToolTypeContainer notClickable={this.props.notClickable}>
            <ToolTypeAllFull show={true} showLine={false}/>
          </ToolTypeContainer>
        </AboutSection>
      </LanguageThemeProvider>
    );
  }
}


export default injectIntl(TheToolbox);
