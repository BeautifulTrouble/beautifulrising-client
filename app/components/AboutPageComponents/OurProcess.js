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

const MainBox = styled.div`
  width: 100%;
`;

const List = styled.ul``;

const ListItem = styled.li`list-style: none;
  width: ${props=>props.theme.itemWidth};
  margin-right: ${props=>props.theme.itemMargin};
  display: inline-block;
  vertical-align: top;

  h1 {
    font-size: 24px;
    margin-bottom: 5px;
  }

  p {
    text-align: left;
    font-size: 18px;
  }
`;

class OurProcess extends React.Component {
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
      </AboutSection>
    );
  }
}

export default injectIntl(OurProcess);
