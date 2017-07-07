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
import SmallHeaderBlock from 'components/SmallHeaderBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

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

  ${props=> {
    if (props.lang === 'ar') {
      return `
        -moz-transform: scaleX(-1);
        -o-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1) rotate(-32deg);
        filter: FlipH;
        -ms-filter: "FlipH";

        right: 91px;
        top: 130px;
      `
    }
  }}
`;
const CallToAction = styled(SmallHeaderBlock)`
  margin: 10px 0 20px;
  margin-top: 17px;
  p {
    margin: 0;
    line-height: 19px;
  }
`;

function CouldBeYou(props) {
  const { formatMessage } = props.intl;
  return (
    <LanguageThemeProvider>
      <Container>
        <AnonImage/>
        <ArrowContainer lang={props.intl.locale}>
          <Isvg src={BentArrowIcon} />
        </ArrowContainer>
        <CallToAction lang={props.intl.locale}>
          <Markdown source={formatMessage(messages.header)} />
        </CallToAction>
      </Container>
    </LanguageThemeProvider>
  );
}

CouldBeYou.propTypes = {

};

export default injectIntl(CouldBeYou);
