/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { FormattedMessage, injectIntl } from 'react-intl';
import AboutSection from 'components/AboutPage/AboutSection';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import VisibilitySensor from 'react-visibility-sensor';
import Markdown from 'react-remarkable';

import ActionAidLogo from 'assets/images/about/aa-logo.png';
import BeautifulTroubleLogo from 'assets/images/about/bt-logo.png';

import BTAATableMenu from 'components/AboutPage/BTAA/BTAATableMenu';
import BTAARow from 'components/AboutPage/BTAA/BTAARow';
import BTAAColumn from 'components/AboutPage/BTAA/BTAAColumn';

import messages from './messages';

export class BeautifulTroubleAA extends React.Component {
  renderHeader() {
    return (
      <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
        <h2>
          {this.props.allData.getIn(['about', 'misc', 'beautiful-trouble-and-action-aid'])}
        </h2>
      </VisibilitySensor>
    )
  }

  render() {
    const {locale}=this.props.intl;
    return (
      <LanguageThemeProvider>
        <AboutSection id='beautiful-trouble-and-action-aid' lang={locale}>
          { this.props.hideHeader ? null : this.renderHeader() }
          <div>
            <ContentBlock>
              <BTAATableMenu>
                <tbody>
                  <BTAARow>
                    <BTAAColumn colSpan={"2"} style={{ padding: '0 25%', textAlign: 'center'}}>
                      <Markdown source={this.props.allData.getIn(['about', 'beautiful-trouble-and-action-aid', 'introduction'])} />
                    </BTAAColumn>
                  </BTAARow>
                  <BTAARow>
                    <BTAAColumn>
                      <Markdown source={this.props.allData.getIn(['about', 'beautiful-trouble-and-action-aid', 'bt'])} />
                      <img src={BeautifulTroubleLogo} />
                    </BTAAColumn>
                    <BTAAColumn>
                      <Markdown source={this.props.allData.getIn(['about', 'beautiful-trouble-and-action-aid', 'aa'])} />
                      <img src={ActionAidLogo} />
                    </BTAAColumn>
                  </BTAARow>
                </tbody>
              </BTAATableMenu>
            </ContentBlock>
          </div>
        </AboutSection>
      </LanguageThemeProvider>
    );

  }
}

export default injectIntl(BeautifulTroubleAA);
