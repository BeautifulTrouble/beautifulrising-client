/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { AboutSection } from 'components/AboutPageComponents';
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
  text-align: left;

  h3 {
    font-size: 26px;
    margin: 0;
    margin-bottom: 5px;
    text-align: left;
    text-transform: uppercase;
  }
  h5 {
    margin: 0;
    font-size: 16px;
  }

  p {
    text-align: left;
    font-size: 16px;
    padding-right: 30px;

    a {
      color: #828486;
    }
  }`;

const Image = styled.div`
  display: inline-block;
  width: 150px;
  height: 150px;
  background-image: url(${props=> `https://www.beautifulrising.org/assets/content/small-${props.source}`})
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 3px solid;

`;

const Name = styled.h3``;
const Team = styled.h5`
  text-transform: uppercase;
`;
const Content = styled.div``;

export default class OurTeam extends React.Component {
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
      return (
      <AboutSection id='team' style={{ textAlign: 'left' }}>
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
                    <Content>
                      <Markdown source={teamMember.get('team-bio')} />
                    </Content>
                  </ListItem>
                );
            })}
          </List>
        </ThemeProvider>
      </AboutSection>
    );
  }
}
