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

  h3 {
    font-size: 24px;
    margin-bottom: 5px;
    text-align: left;
  }

  p {
    text-align: left;
    font-size: 18px;
    padding-left: 10px;
  }`;

const Image = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  background-image: url(${props=> `https://www.beautifulrising.org/assets/content/small-${props.source}`})
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Name = styled.h3``;
const Team = styled.h5`
  text-transform: uppercase;
`;
const Content = styled.div``;

export default class Partners extends React.Component {
  render() {
    return (
      <AboutSection id='partners'>
        <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
          <h2>
            <FormattedMessage {...messages.partnersHeader} />
          </h2>
        </VisibilitySensor>
        <ThemeProvider theme={themeThreeColumns}>
          <List>
            { this.props.networkPartners === undefined ? null : this.props.networkPartners.map((item, ind) => (
              <ListItem key={ind}>
                <Image source={item.get('logo')} />
                <div>
                  <a href={item.get('link')} target="_blank">{item.get('name')}</a>
                </div>
              </ListItem>
            ))}
          </List>
        </ThemeProvider>
      </AboutSection>
    );
  }
}
