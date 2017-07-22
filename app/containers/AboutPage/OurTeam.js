/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

import { FormattedMessage, injectIntl } from 'react-intl';
import AboutSection from 'components/AboutPage/AboutSection';
import { themeThreeColumns } from 'components/CommonComponents';
import VisibilitySensor from 'react-visibility-sensor';
import Markdown from 'react-remarkable';
import messages from './messages';

const List = styled.ul``;

const ListItem = styled.li`list-style: none;
  width: ${props=>props.theme.itemWidth};
  margin-right: ${props=>props.theme.itemMargin};
  display: inline-block;
  vertical-align: top;
  margin-bottom: 50px;
  text-align: ${p=>p.theme.isArabic?'right':'left'};

  h3 {
    font-size: 19px;
    font-weight: 800; font-family: 'Avenir', 'Kaff', sans-serif;
    margin: 0;
    margin-top: 15px;
    text-align: ${p=>p.theme.isArabic?'right':'left'};
    text-transform: uppercase;
    letter-spacing: 0;
  }

  h5 {
    margin: 0;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 800; font-family: 'Avenir', 'Kaff', sans-serif;
    letter-spacing: 0;
  }

  p { padding-${p=>p.theme.isArabic?'left':'right'}: 30px; }
`;

const Image = styled.div`
  display: inline-block;
  width: 150px;
  height: 150px;
  background-image: url(${props=> `https://www.beautifulrising.org/assets/content/small-${props.source}`})
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid;

`;

const Name = styled.h3``;
const Team = styled.h5`
  text-transform: uppercase;
`;

export class OurTeam extends React.Component {
  renderHeader() {
    return(
      <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
        <h2>
          <FormattedMessage {...messages.ourTeamHeader} />
        </h2>
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
            <List>
              { !this.props.teamMembers ? null : this.props.teamMembers.map((item, ind) => {
                  const teamMember = this.props.allData.get(item);
                  return (
                    <ListItem key={ind}>
                      <Image source={teamMember.get('image')} />
                      <Name>{teamMember.get('person')}</Name>
                      <Team>{teamMember.get('team-title')}</Team>
                      <ContentBlock>
                        <Markdown source={teamMember.get('team-bio')} />
                      </ContentBlock>
                    </ListItem>
                  );
              })}
            </List>
          </ThemeProvider>
        </AboutSection>
      </LanguageThemeProvider>
    );
  }
}

export default injectIntl(OurTeam);
