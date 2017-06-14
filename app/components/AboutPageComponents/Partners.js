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
    font-size: 24px;
    margin-bottom: 5px;
    text-align: left;
  }
  a {
    color: #828486;
    font-size: 16px;
    padding-right: 80px;
  }
  p {
    text-align: left;
    font-size: 18px;
    padding-left: 10px;
  }`;

const Image = styled.div`
  display: inline-block;
  width: 150px;
  height: 150px;
  background-image: url(${props=> `https://www.beautifulrising.org/assets/content/small-${props.source}`})
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Name = styled.h3`
font-size: 16px !important;
text-transform: uppercase;

&::before {
  content: '___';
  display: block;
  clear: both;
  color: black;
  font-weight: bold;
}
`;
const Team = styled.h5`
  text-transform: uppercase;
`;
const Content = styled.div``;

export default class Partners extends React.Component {
  renderHeader() {
    return (
      <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
        <h2>
          <FormattedMessage {...messages.partnersHeader} />
        </h2>
      </VisibilitySensor>
    );
  }
  render() {
    return (
      <AboutSection id='partners'>
        { this.props.hideHeader ? null : this.renderHeader() }
        <ThemeProvider theme={themeThreeColumns}>
          <List>
            { this.props.networkPartners === undefined ? null : this.props.networkPartners.map((item, ind) => (
              <ListItem key={ind}>
                <a href={item.get('link')} target="_blank">
                  <Image source={item.get('logo')} />
                  <Name>
                    {item.get('name')}
                  </Name>
                </a>
              </ListItem>
            ))}
          </List>
        </ThemeProvider>
      </AboutSection>
    );
  }
}
