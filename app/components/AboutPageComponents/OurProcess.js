/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { injectIntl, FormattedMessage } from 'react-intl';
import { AboutSection } from 'components/AboutPageComponents';
import { themeFourColumns } from 'components/CommonComponents';
import messages from './messages';
import VisibilitySensor from 'react-visibility-sensor';
import Markdown from 'react-remarkable';

import InspirationImage from 'assets/images/about/inspiration.svg';
import DefinitionImage from 'assets/images/about/definition.svg';
import PrototypingImage from 'assets/images/about/prototyping.svg';
import RealizationImage from 'assets/images/about/realization.svg';

import CircledImage from 'components/CircledImage';

const MainBox = styled.div`
  width: 100%;
`;

const List = styled.ul``;

const ListItem = styled.li`list-style: none;
  width: ${props=>props.theme.itemWidth};
  margin-right: ${props=>props.theme.itemMargin};
  display: inline-block;
  vertical-align: top;
  margin-bottom: 50px;

  h1 {
    font-size: 24px;
    margin-bottom: 5px;
    text-align: left;
  }

  p {
    text-align: left;
    font-size: 18px;
    padding-left: 10px;
  }

  h2 {
    font-size: 21px;
    text-transform: uppercase;
  }

  h4 {
    margin: 0;
    text-transform: uppercase;
    text-align: left;
    padding-left: 20px;
    &::before {
      content: '____';
      display: block;
      clear: both;
    }
  }

  ol {
    li {
      font-size: 14px;
      text-align: left;
    }
  }
`;

const ParticipantsContainer = styled.div`
  h3 {
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  height: 120px;
  margin-bottom: 30px;
`;
class OurProcess extends React.Component {

  renderProjects() {

    if (!this.props.participants || !this.props.participants.get('groups')) return null;

    const groups = this.props.participants.get('groups')

    if (!groups) return null;

    return (
        <List>
          {groups.map((item,ind) => { return(
            <ListItem key={ind}>

              <Image src={require('assets/images/workshops/' + item.get('name') + '.png')} />
              <h4>{item.get('name')}</h4>
              <ol>
                {item.get('participants') ?
                    item.get('participants').map((participant, ind2) =>( <li key={ind2}>{participant}</li> ))
                    : null }
              </ol>
            </ListItem>
            )}
          )}
        </List>
      )

  }

  render() {
    const theme = themeFourColumns;
    const {formatMessage} = this.props.intl;

    return (
      <AboutSection id='process' name='process'>
        <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
          <h2>
            <FormattedMessage {...messages.ourProcessHeader} />
          </h2>
        </VisibilitySensor>
        <ThemeProvider theme={themeFourColumns}>
            <List>
              <ListItem>
                <CircledImage src={InspirationImage} />
                <Markdown source={formatMessage(messages.inspiration)} />
              </ListItem>

              <ListItem>
                <CircledImage src={DefinitionImage} />
                <Markdown source={formatMessage(messages.definition)} />
              </ListItem>

              <ListItem>
                <CircledImage src={PrototypingImage} />
                <Markdown source={formatMessage(messages.prototyping)} />
              </ListItem>

              <ListItem>
                <CircledImage src={RealizationImage} />
                <Markdown source={formatMessage(messages.realization)} />
              </ListItem>
            </List>
        </ThemeProvider>


        <ThemeProvider theme={themeFourColumns}>
          <ParticipantsContainer>
            <h3>
              <FormattedMessage {...messages.participantsHeader} />
            </h3>
            {this.renderProjects()}
          </ParticipantsContainer>
        </ThemeProvider>
      </AboutSection>
    );
  }
}

export default injectIntl(OurProcess);
