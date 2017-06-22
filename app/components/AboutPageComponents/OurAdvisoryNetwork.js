/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { AboutSection, Introduction, IntroText } from 'components/AboutPageComponents';
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

    font-size: 19px;
    font-family: 'Avenir Black', 'Kaff Bold', sans-serif;
    margin: 0;
    margin-top: 15px;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0;

  }
  h5 {
    margin: 0;
    font-size: 14px;
    text-transform: uppercase;
    font-family: 'Avenir Black', 'Kaff Bold', sans-serif;
    letter-spacing: 0;
  }

  p {
    text-align: left;
    font-size: 14px;
    line-height: 22px;
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
  border: 2px solid;
`;

const Name = styled.h3`
`;
const Team = styled.h5`
`;
const Content = styled.div``;

const AdvisoryNetworkSection =styled(AboutSection)`
  h2 {
    &::after {
      left: 83%;
    }
  }
`;

const AdvisoryNetworkIntro = styled(IntroText)`
  margin-left: 82%;
  width: 33%;
  padding: 0;
`
export default class OurAdvisoryNetwork extends React.Component {
  renderHeader() {
    return (
      <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
        <div>
          <h2>
            <FormattedMessage {...messages.ourAdvisoryNetworkHeader} />
          </h2>
        </div>
      </VisibilitySensor>
    );
  }
  render() {
    return (
      <AdvisoryNetworkSection id='advisory-network' style={{ textAlign: 'left' }}>
        { this.props.hideHeader ? null : this.renderHeader() }
        <Introduction>
          <AdvisoryNetworkIntro>
            <Markdown source={this.props.introText}/>
          </AdvisoryNetworkIntro>
        </Introduction>
        <ThemeProvider theme={themeThreeColumns}>
          <List>
            { this.props.advisoryNetwork.map((item, ind) => (
              <ListItem key={ind}>
                <Image source={item['image']} />
                <Name>{item['person']}</Name>
                <Team>ADVISORY NETWORK</Team>
                <Content>
                  <Markdown source={item['team-bio']} />
                </Content>
              </ListItem>
            ))}
          </List>
        </ThemeProvider>
      </AdvisoryNetworkSection>
    );
  }
}
