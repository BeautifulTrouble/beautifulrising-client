/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { injectIntl, FormattedMessage } from 'react-intl';
import VisibilitySensor from 'react-visibility-sensor';
import Markdown from 'react-remarkable';


import ContentBlock from 'components/ContentBlock';
import { AboutSection } from 'components/AboutPageComponents';
import { themeFourColumns } from 'components/CommonComponents';
import messages from './messages';

import InspirationImage from 'assets/images/about/inspiration.svg';
import DefinitionImage from 'assets/images/about/definition.svg';
import PrototypingImage from 'assets/images/about/prototyping.svg';
import RealizationImage from 'assets/images/about/realization.svg';

import CircledImage from 'components/CircledImage';

const WORKSHOPS = ['myanmar', 'jordan', 'zimbabwe', 'bangladesh', 'uganda', 'mexico'];
const MainBox = styled.div`
  width: 100%;
`;

const List = styled.ul`
`;

const ListItem = styled.li`list-style: none;
  width: ${props=>props.theme.itemWidth};
  margin-${p=>p.lang==='ar'?'left':'right'}: ${props=>props.theme.itemMargin};
  display: inline-block;
  vertical-align: top;
  margin-bottom: 50px;
  text-align: ${p=>p.lang==='ar'?'right':'left'};

  &:last-child {
    .circledContainer {
      &::after {
        display: none;
      }
    }
  }
  h1 {
    font-size: 30px;
    margin-bottom: 5px;
    text-align: ${p=>p.lang==='ar'?'right':'left'};
  }

  p {
    padding-${p=>p.lang==='ar'?'right':'left'}: 10px;
  }

  h2 {
    font-size: 21px;
    text-transform: uppercase;
  }

  h4 {
    margin: 0;
    text-transform: uppercase;
    text-align: ${p=>p.lang==='ar'?'right':'left'};
    padding-${p=>p.lang==='ar'?'right':'left'}: 20px;
    &::before {
      content: ' ';
      display: block;
      clear: both;
      width: 42px;
      border-bottom: 2px solid;
    }
  }

  ol {
    li {
      font-size: 12px;
      text-align: ${p=>p.lang==='ar'?'right':'left'};
      line-height: 20px;
    }
  }
`;

const ParticipantsContainer = styled.div`
  h3 {
    font-size: 16px;
    font-family: 'Avenir Black', 'Kaff Bold', sans-serif;
    letter-spacing: 0;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  h4 {
    font-size: 30px;
  }
`;

const Image = styled.img`
  height: 120px;
  margin-bottom: 30px;
  margin-${p=>p.lang==='ar'?'right':'left'}: 20px;
`;

const PROCESSES = [
  {
    icon: InspirationImage,
    text: messages.inspiration
  },
  {
    icon: DefinitionImage,
    text: messages.definition
  },
  {
    icon: PrototypingImage,
    text: messages.prototyping
  },
  {
    icon: RealizationImage,
    text: messages.realization
  }
]
class OurProcess extends React.Component {

  renderProjects() {

    if (!this.props.participants || !this.props.participants.get('groups')) return null;

    const groups = this.props.participants.get('groups')
    const lang = this.props.intl.locale;
    if (!groups) return null;

    return (
        <List lang={lang}>
          {groups.map((item,ind) => { return(
            <ListItem key={ind} lang={lang}>

              <Image lang={lang} src={require('assets/images/workshops/' + WORKSHOPS[ind] + '.png')} />
              <h4>{item.get('name')}</h4>
              <ContentBlock>
                <ol>
                  {item.get('participants') ?
                      item.get('participants').map((participant, ind2) =>( <li key={ind2}>{participant}</li> ))
                      : null }
                </ol>
              </ContentBlock>
            </ListItem>
            )}
          )}
        </List>
      )

  }

  renderHeader() {
    return (<VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
      <h2>
        <FormattedMessage {...messages.ourProcessHeader} />
      </h2>
    </VisibilitySensor>);
  }

  render() {
    const theme = themeFourColumns;
    const {formatMessage, locale} = this.props.intl;
    return (
      <AboutSection id='process' name='process' lang={locale}>
        { this.props.hideHeader ?  null : this.renderHeader() }
        <ThemeProvider theme={themeFourColumns}>
            <List>
              {PROCESSES.map(item=>(
                <ListItem key={item.icon} lang={locale}>
                  <CircledImage src={item.icon} />
                  <ContentBlock>
                    <Markdown source={formatMessage(item.text)} />
                  </ContentBlock>
                </ListItem>
              ))}
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
