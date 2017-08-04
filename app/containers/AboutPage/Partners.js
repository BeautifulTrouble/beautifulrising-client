/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { injectIntl } from 'react-intl';
import VisibilitySensor from 'react-visibility-sensor';
import Markdown from 'react-remarkable';

import AboutSection from 'components/AboutPage/AboutSection';
import { themeThreeColumns } from 'components/CommonComponents';

import ListItem from 'components/AboutPage/Partners/ListItem';
import ImageContainer from 'components/AboutPage/Partners/ImageContainer';
import Image from 'components/AboutPage/Partners/Image';
import Name from 'components/AboutPage/Partners/Name';
import Team from 'components/AboutPage/Partners/Team';

import messages from './messages';

class Partners extends React.Component {
  renderHeader() {
    const lang = this.props.intl.locale;
    return (
      <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
        <h2 lang={lang}>{this.props.header}</h2>
      </VisibilitySensor>
    );
  }
  render() {
    if (!this.props.networkPartners) return null;

    const lang = this.props.intl.locale;
    return (
      <AboutSection id='partners' lang={lang} position={this.props.networkPartners.toString().length}>
        { this.props.hideHeader ? null : this.renderHeader() }
        <ThemeProvider theme={themeThreeColumns}>
          <ul>
            { this.props.networkPartners === undefined ? null : this.props.networkPartners.map((item, ind) => (
              <ListItem key={ind} lang={lang}>
                <a href={item.get('link')} target="_blank">
                  <ImageContainer>
                    <Image source={item.get('logo')} />
                  </ImageContainer>
                  <Name lang={lang}>
                    {item.get('name')}
                  </Name>
                </a>
              </ListItem>
            ))}
          </ul>
        </ThemeProvider>
      </AboutSection>
    );
  }
}

export default injectIntl(Partners)
