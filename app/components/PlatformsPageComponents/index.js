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

const Container = styled.div``;
const Viewport = styled.div`
    display: inline-block;
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
`;
const Image = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${props=> `https://www.beautifulrising.org/${props.source}`})
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
const Title = styled.h1``;
const Subtitle = styled.h3``;

export default class PlatformsPageComponents extends React.Component {
  render() {

    if (!this.props.content || this.props.content === undefined) return null;

    return (
      <Container>
        <Viewport>
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
              <Markdown source={this.props.content.get('what')} />

              <Subtitle>
                <FormattedMessage {...messages.how} />
              </Subtitle>
              <Markdown source={this.props.content.get('how')} />
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
