/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import VisibilitySensor from 'react-visibility-sensor';
import messages from './messages';
import Markdown from 'react-remarkable';
import Isvg from 'react-inlinesvg';


export const Header = styled.h1`
  font-size: 48px;
`;
const Container = styled.div`
  padding-left: 96px;
`;
const Viewport = styled.div`
    display: inline-block;
    position: relative;
`;
const TextContent = styled.div`
  width: 30%;
  float: left;
`;
const Content = styled.div`
  text-align: left;
`;
const ImageContent= styled.div`
  width: 69%;
  float: right;
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
  left: -120px;
  width: 100px;
  text-align: right;
`;

const Title = styled.h1`
margin-top: 0;
position: relative;
margin-bottom: 0px;

&::before {
  content: ' ';
  position: absolute;
  width: 48px;
  border-bottom: 2px solid;
  left: 0;
`;
const Subtitle = styled.h3`
  font-family: 'Avenir Black', 'Kaff Bold', sans-serif;
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

const ContentArea = styled.div`
  font-size: 14px;
  line-height: 22px;
`;

export const PlatformsSection = styled.div`
font-size: 24px;
`;
export default class PlatformsPageComponents extends React.Component {
  render() {

    if (!this.props.content || this.props.content === undefined) return null;
    return (
      <Container>
        <Viewport>
          <IconContainer>
            <Isvg src={this.props.icon} />
          </IconContainer>
          <TextContent>
            <Content>
              <Title>
                {this.props.content.get('title')}
              </Title>
              <Subtitle>
                {this.props.content.get('introduction')}
              </Subtitle>

              <Subtitle>
                <FormattedMessage {...messages.what} />
              </Subtitle>
              <ContentArea>
                <Markdown source={this.props.content.get('what')} />
              </ContentArea>

              <Subtitle>
                <FormattedMessage {...messages.how} />
              </Subtitle>
              <ContentArea>
                <Markdown source={this.props.content.get('how')} />
              </ContentArea>

              <CTA>
                <Markdown source={this.props.content.get('get')} />
              </CTA>
            </Content>
          </TextContent>
          <ImageContent>
            <Image source={this.props.content.get('image')} />
          </ImageContent>
        </Viewport>
      </Container>
    );
  }
}
