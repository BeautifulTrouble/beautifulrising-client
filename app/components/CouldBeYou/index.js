/**
*
* CouldBeYou
*
*/

import React from 'react';
import styled from 'styled-components';
import Isvg from 'react-inlinesvg';
import BentArrowIcon from 'assets/images/icons/bent-arrow.svg';
import AnonPhoto from 'assets/images/icons/anon.png';
import Markdown from 'react-remarkable';
import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';

const Container = styled.div`
  position: relative;
`;
const AnonImage = styled.div`
  border: 2px solid black;
  display: block;
  width: 100%;
  margin-top: 10px;
  background-image: url(${AnonPhoto});
  padding-bottom: 100%;
  background-size: cover;
  background-position: center center;
`;
const ArrowContainer = styled.span`
  display: inline-block;
  position: absolute;
  right: 30px;
  top: 143px;
`;
const CallToAction = styled.div`
  margin: 10px 0 20px;
  p {
    font-size: 19px;
    line-height: 22px;
    margin: 0;
    font-family: 'Avenir Black', 'Kaff Bold';
    text-align: ${props=>props.lang==='ar' ? 'right' : 'left'};
    text-transform: uppercase;
  }
`;

function CouldBeYou(props) {
  const { formatMessage } = props.intl;
  return (
    <Container>
      <AnonImage/>
      <ArrowContainer>
        <Isvg src={BentArrowIcon} />
      </ArrowContainer>
      <CallToAction lang={props.intl.locale}>
        <Markdown source={formatMessage(messages.header)} />
      </CallToAction>
    </Container>
  );
}

CouldBeYou.propTypes = {

};

export default injectIntl(CouldBeYou);
