import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';
import ContentBlock from 'components/ContentBlock';
import { FormattedMessage, injectIntl } from 'react-intl';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import Timestamp from 'react-timestamp';
import messages from './messages';
import { twitterFollow } from 'utils/social';


const ItemContainer = styled.li`
  list-style: none;
  border-top: 2px solid;
  padding: 15px 0;
`;
const Viewport = styled.div`
position: relative`;

const Source = styled(Link)`
  font-weight: 800;
  text-transform: uppercase;
  display: block;
  color: black;
  text-decoration: none;
`;
const Handle = styled(Link)`
  text-decoration: none;
  display: block;
  color: gray;
`;

const Image = styled.img`
  float: ${props=>props.lang === 'ar' ? 'right' : 'left' };
  ${props=>props.lang === 'ar' ? 'margin-left' : 'margin-right' }: 5px;
  width: 40px;
`;
const Content = styled.span`
margin-top: 15px;
display: inline-block;
`;
const CallToAction = styled.div`
color: gray;
display: block;
margin: 5px 0;
text-align: ${p=>p.theme.isArabic ? 'left': 'right'} !important;

  button {
    color: gray;
    text-transform: uppercase;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const TweetTimestamp = styled(Timestamp)`
  display: block;
  font-size: 12px;
  margin: 2px 0;
  color: gray;
`;

function FacebookFeedItem(props) {

  return (
    <LanguageThemeProvider>
      <ItemContainer>
        <Viewport>
          <ContentBlock>
            <Image src={props.image_https} lang={props.intl.locale}/>
            <Source to={props.user_link} target='_blank'>{props.user_name}</Source>
            <Handle to={props.user_link} target='_blank'>{props.user_handle}</Handle>
            <Content dangerouslySetInnerHTML={{__html: props.content_html}}></Content>
          </ContentBlock>
          <TweetTimestamp time={props.timestamp / 1000} format='full' />
        </Viewport>
      </ItemContainer>
    </LanguageThemeProvider>
  )
}

export default injectIntl(FacebookFeedItem);
