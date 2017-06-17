import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';
import { FormattedMessage } from 'react-intl';
import Timestamp from 'react-timestamp';
import messages from './messages';



const ItemContainer = styled.li`
  list-style: none;
  border-top: 2px solid;
  padding: 15px 0;
`;
const Viewport = styled.div`
position: relative`;

const Source = styled(Link)`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
  display: block;
  font-weight: bold;
  color: black;
  text-decoration: none;
  line-height: 22px;
`;
const Handle = styled(Link)`
line-height: 22px;
text-decoration: none;
  font-size: 14px;
  display: block;
  color: gray;
  &::before { content: '@'; }
`;

const Image = styled.img`
  float: left;
  width: 40px;
  margin-right: 5px;

`;
const Content = styled.span`
font-size: 14px;
line-height: 22px;
margin-top: 15px;
display: inline-block;
a { color: gray; }

`;
const CallToAction = styled.div`
color: gray;
display: block;
margin: 5px 0;
text-align: right !important;

  button {
    color: gray;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: underline;
    font-size:14px;
  }
`;

const TweetTimestamp = styled(Timestamp)`
  display: block;
  font-size: 12px;
  margin: 2px 0;
  color: gray;
`;

export default function NewsFeedItem(props) {
  return (
    <ItemContainer>
      <Viewport>
        <Image src={props.image_http}/>
        <Source to={props.user_link}>{props.user_name}</Source>
        <Handle to={props.user_link}>{props.user_handle}</Handle>
        <Content dangerouslySetInnerHTML={{__html: props.content_html}}></Content>
        <TweetTimestamp time={props.timestamp / 1000} format='full' />
        <CallToAction>
          <button><FormattedMessage {...messages.follow} /></button>
        </CallToAction>
      </Viewport>
    </ItemContainer>
  )
}
