/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

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
  text-align: ${p=>p.lang==='ar'?'right':'left'};

  h3 {
    font-size: 24px;
    margin-bottom: 5px;
    text-align: ${p=>p.lang==='ar'?'right':'left'};
  }
  a {
    color: #828486;
    font-size: 16px;
    display: inline-block;
    width: 100%;
  }
  p {
    text-align: ${p=>p.lang==='ar'?'right':'left'};
    font-size: 18px;
    padding-${p=>p.lang==='ar'?'right':'left'}: 10px;
  }`;

const ImageContainer = styled.div`
width: 65%;
padding-bottom: 13px;
`;

const Image = styled.div`
  display: inline-block;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-image: url(${props=> `https://www.beautifulrising.org/assets/content/small-${props.source}`})
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const Name = styled.h5`
font-size: 14px !important;
text-transform: uppercase;
position: relative;

font-weight: 800; font-family: 'Avenir', 'Kaff', sans-serif;
&::before {
  content: ' ';
  width: 42px;
  height: 1px;
  border-bottom: 2px solid black;
  position: absolute;
  top: -10px;
  ${p=>p.lang==='ar'?'right':'left'}: 0;
}
`;
const Team = styled.h5`
  text-transform: uppercase;
`;
const Content = styled.div``;

class Partners extends React.Component {
  renderHeader() {
    const lang = this.props.intl.locale;
    return (
      <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
        <h2 lang={lang}>
          <FormattedMessage {...messages.partnersHeader} />
        </h2>
      </VisibilitySensor>
    );
  }
  render() {
    const lang = this.props.intl.locale;
    return (
      <AboutSection id='partners' lang={lang}>
        { this.props.hideHeader ? null : this.renderHeader() }
        <ThemeProvider theme={themeThreeColumns}>
          <List>
            { this.props.networkPartners === undefined ? null : this.props.networkPartners.map((item, ind) => (
              <ListItem key={ind} lang={lang}>
                <a href={item.get('link')} target="_blank">
                  <ImageContainer>
                    <Image source={item.get('logo')} />
                  </ImageContainer>
                  <Name lang={lang}>
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

export default injectIntl(Partners)
