/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage, injectIntl } from 'react-intl';
import VisibilitySensor from 'react-visibility-sensor';

import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import messages from './messages';
import Markdown from 'react-remarkable';
import Isvg from 'react-inlinesvg';


export const Header = styled.h1`
  font-size: 48px;
`;
const Container = styled.div`
  margin-top: 30px;
  ${props=>props.lang==='ar'?'padding-right':'padding-left'}: 96px;
`;
const Viewport = styled.div`
    display: inline-block;
    position: relative;
`;
const TextContent = styled.div`
  width: 30%;
  float: ${props=>props.lang==='ar'?'right':'left'};
  text-align: ${props=>props.lang==='ar'?'right':'left'};
  * {
    text-align: ${props=>props.lang==='ar'?'right':'left'};
  }
`;
const Content = styled.div`
  text-align: ${props=>props.lang==='ar'?'right':'left'};
`;
const ImageContent= styled.div`
  width: 69%;
  float: ${props=>props.lang==='ar'?'right':'left'};
  height: 400px;
  display: inline-block;
  margin-top: 130px;
`;
const Image = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${props=> `https://www.beautifulrising.org/${props.source}`})
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 20px;
  ${props=>props.lang==='ar'?'right: -70px':'left: -120px'};
  width: 100px;
  text-align: right;
`;

const Title = styled.h1`
margin-top: 0;
position: relative;
margin-bottom: 0px;
font-size: 48px;

&::before {
  content: ' ';
  position: absolute;
  width: 48px;
  border-bottom: 2px solid;
  ${props=>props.lang==='ar'?'right':'left'}: 0;
`;
const Subtitle = styled.h3`
  font-weight: 800; font-family: 'Avenir', 'Kaff', sans-serif;
  font-size: 16px;
  letter-spacing: 0px;
  margin-bottom: 5px;
`;

const CTA = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  color: #828486;
  a { color: #828486; }
`;


export const PlatformsSection = styled.div`
font-size: 24px;
`;
class PlatformsPageComponents extends React.Component {
  render() {

    if (!this.props.content || this.props.content === undefined) return null;
    const lang = this.props.intl.locale;
    return (
      <LanguageThemeProvider>
        <Container lang={lang}>
          <Viewport>
            <IconContainer lang={lang}>
              <Isvg src={this.props.icon} />
            </IconContainer>
            <TextContent lang={lang}>
              <Content>
                <Title lang={lang}>
                  {this.props.content.get('title')}
                </Title>
                <Subtitle>
                  {this.props.content.get('introduction')}
                </Subtitle>

                <Subtitle>
                  <FormattedMessage {...messages.what} />
                </Subtitle>
                <ContentBlock>
                  <Markdown source={this.props.content.get('what')} />
                </ContentBlock>

                <Subtitle>
                  <FormattedMessage {...messages.how} />
                </Subtitle>
                <ContentBlock>
                  <Markdown source={this.props.content.get('how')} />
                </ContentBlock>

                <CTA>
                  <Markdown source={this.props.content.get('get')} />
                </CTA>
              </Content>
            </TextContent>
            <ImageContent lang={lang}>
              <Image source={this.props.content.get('image')} />
            </ImageContent>
          </Viewport>
        </Container>
      </LanguageThemeProvider>
    );
  }
}

export default injectIntl(PlatformsPageComponents);
