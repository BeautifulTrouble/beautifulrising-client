/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function AboutPageComponents() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export const Introduction = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;
export const IntroText = styled.div`
  width: 50%;
  margin-${p=>p.lang==='ar'?'right':'left'}: 50%;
  transform: translateX(${p=>p.lang==='ar'?'50%':'-50%'});
  padding: 0 40px;
  text-align: center;
`;

export const AboutSection = styled.div`
font-size: 24px;
padding: 0 20px;
padding-top: 20px;
position: relative;
h2 {
  text-transform: uppercase;
  border: 2px solid;
  border-width: 0 0 3px;
  font-size: 19px;
  letter-spacing: 0;
  font-family: 'Avenir Black', 'Kaff Bold', sans-serif;
  margin-top: 40px;
  padding: 15px 20px;
  text-align: ${p=>p.lang==='ar'?'right':'left'};
  position: relative;
  margin-bottom: 80px;

  &::after {
    content: ' ';
    position: absolute;
    height: 80px;
    border-right: ${p=>p.hideHeader ? '0px solid' : '1px solid'};
    width: 1PX;
    bottom: -65px;
    ${p=>p.lang==='ar'?'right':'left'}: 50%;
  }
}

`;

AboutPageComponents.propTypes = {

};

export default AboutPageComponents;
