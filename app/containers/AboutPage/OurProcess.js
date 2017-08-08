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

import LanguageThemeProvider from 'components/LanguageThemeProvider';
import ContentBlock from 'components/ContentBlock';
import AboutSection from 'components/AboutPage/AboutSection';
import { themeFourColumns } from 'components/CommonComponents';

import InspirationImage from 'assets/images/about/inspiration.svg';
import DefinitionImage from 'assets/images/about/definition.svg';
import PrototypingImage from 'assets/images/about/prototyping.svg';
import RealizationImage from 'assets/images/about/realization.svg';

import ProcessListItem from 'components/AboutPage/Process/ProcessListItem';
import ProcessParticipantsContainer from 'components/AboutPage/Process/ProcessParticipantsContainer';
import ProcessImage from 'components/AboutPage/Process/ProcessImage';
import CircledImage from 'components/CircledImage';

import messages from './messages';
import staticText from './staticText';

const WORKSHOPS = ['myanmar', 'jordan', 'zimbabwe', 'bangladesh', 'uganda', 'mexico'];

const [STEPS, SUBHEADING, WORKSHOP] = [0, 1, 2];

const Subheader = styled.h4`margin-top: 18px;`
const Header = styled.h3`margin-top: 24px;`
const ProcessList = styled.ul`
@media(max-width: 700px) {
  padding: 0;
}
`;
class OurProcess extends React.Component {

  renderProjects() {

    if (!this.props.participants || !this.props.participants.get('groups')) return null;

    const groups = this.props.participants.get('groups')
    const lang = this.props.intl.locale;
    if (!groups) return null;

    return (
        <ProcessList lang={lang}>
          {groups.map((item,ind) => { return(
            <ProcessListItem key={ind} lang={lang}>

              <ProcessImage lang={lang} src={require('assets/images/workshops/' + WORKSHOPS[ind] + '.png')} />
              <Subheader>{item.get('name')}</Subheader>
              <ContentBlock>
                <ol>
                  {item.get('participants') ?
                      item.get('participants').map((participant, ind2) =>( <li key={ind2}>{participant}</li> ))
                      : null }
                </ol>
              </ContentBlock>
            </ProcessListItem>
            )}
          )}
        </ProcessList>
      )

  }

  renderHeader() {
    return (
    <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
      <h2>{this.props.header}</h2>
    </VisibilitySensor>);
  }

  renderProcess() {
    const { locale } = this.props.intl;
    const {processes} = this.props;
    if (!processes) return null;
    // processes[0] is the list
    return (
      <LanguageThemeProvider theme={themeFourColumns}>
          <ProcessList>
            {processes[STEPS].value.map(item=>(
              <ProcessListItem key={item.image} lang={locale}>
                <CircledImage src={`https://beautifulrising.org/${item.image}`} />
                <ContentBlock>
                  <Header>{item.title}</Header>
                  <Markdown source={item.description} />
                </ContentBlock>
              </ProcessListItem>
            ))}
          </ProcessList>
      </LanguageThemeProvider>
    )
  }

  renderParticipants() {
    const {processes} = this.props;
    if (!processes) return null;

    return (
      <LanguageThemeProvider theme={themeFourColumns}>
        <ProcessParticipantsContainer>
          <h3>{processes[SUBHEADING].value}</h3>
          {this.renderProjects()}
        </ProcessParticipantsContainer>
      </LanguageThemeProvider>
    );
  }

  render() {
    if (!this.props.processes) return null;
    const {locale} = this.props.intl;
    return (
      <LanguageThemeProvider>
        <AboutSection id='process' name='process' position={this.props.processes.toString().length} lang={locale}>
          { this.props.hideHeader ?  null : this.renderHeader() }
          { this.renderProcess() }
          {this.renderParticipants() }
        </AboutSection>
      </LanguageThemeProvider>
    );
  }
}

export default injectIntl(OurProcess);
