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

const List = styled.ul`
text-align: left;
`;

const ListItem = styled.li`list-style: none;
  width: ${props=>props.theme.itemWidth};
  margin-right: ${props=>props.theme.itemMargin};
  display: inline-block;
  vertical-align: top;
  margin-bottom: 34px;

  h3 {
    font-size: 19px;
    letter-spacing: 0px;
    margin-bottom: 5px;
    text-align: left;
    font-family: 'Avenir Black', 'Kaff Bold';
  }

  p {
    text-align: left;
    font-size: 14px;
    line-height: 22px;
    padding-left: 10px;
  }`;

const Image = styled.div`
  display: inline-block;
  width: 200px;
  height: 200px;
  background-image: url(${props=> `https://www.beautifulrising.org/assets/content/small-${props.source}`})
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Name = styled.h3``;
const Team = styled.h5`
  text-transform: uppercase;
`;
const Content = styled.div``;

export default class FAQ extends React.Component {
  renderHeader() {
    return(
      <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
        <h2>
          <FormattedMessage {...messages.faqHeader} />
        </h2>
      </VisibilitySensor>
    )
  }
  render() {
    return (
      <AboutSection id='faq'>
        { this.props.hideHeader ? null : this.renderHeader()}
        <List>
          { this.props.questions === undefined ? null : this.props.questions.map((item, ind) => {
              return (
                <ListItem key={ind}>
                  <h3>{item.get('question')}</h3>
                  <Content>
                    <Markdown source={item.get('answer')} />
                  </Content>
                </ListItem>
              )
            })
          }
        </List>
      </AboutSection>
    );
  }
}
