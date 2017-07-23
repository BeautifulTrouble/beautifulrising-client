/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import VisibilitySensor from 'react-visibility-sensor';
import Markdown from 'react-remarkable';

import { injectIntl } from 'react-intl';

import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import { themeThreeColumns } from 'components/CommonComponents';

import AboutSection from 'components/AboutPage/AboutSection';
import TeamListItem from 'components/AboutPage/TeamListItem';
import TeamImage from 'components/AboutPage/TeamImage';
import TeamName from 'components/AboutPage/TeamName';

export class OurTeam extends React.Component {
  renderHeader() {
    return(
      <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
        <h2>{ this.props.header }</h2>
      </VisibilitySensor>
    );
  }
  render() {
      const {locale}=this.props.intl;
      return (
      <LanguageThemeProvider>
        <AboutSection id='team' lang={locale}>
          { this.props.hideHeader ? null : this.renderHeader() }
          <ThemeProvider theme={themeThreeColumns}>
            <ul>
              { !this.props.teamMembers ? null : this.props.teamMembers.map((item, ind) => {
                  const teamMember = this.props.allData.get(item);
                  return (
                    <TeamListItem key={ind}>
                      <TeamImage source={teamMember.get('image')} />
                      <h3>{teamMember.get('person')}</h3>
                      <TeamName>{teamMember.get('team-title')}</TeamName>
                      <ContentBlock>
                        <Markdown source={teamMember.get('team-bio')} />
                      </ContentBlock>
                    </TeamListItem>
                  );
              })}
            </ul>
          </ThemeProvider>
        </AboutSection>
      </LanguageThemeProvider>
    );
  }
}

export default injectIntl(OurTeam);
