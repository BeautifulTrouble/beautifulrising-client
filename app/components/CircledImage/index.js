/**
*
* CircledImage
*
*/

import React from 'react';
import styled from 'styled-components';
import Isvg from 'react-inlinesvg';
import { injectIntl } from 'react-intl';
const CircledContainer = styled.div`
  width: 160px;
  padding: 20px 0;
  height: 160px;
  vertical-align: middle;
  position: relative;
  text-align: center;

  &::after {
    content: ' ';
    width: 189px;
    height: 1px;
    border-bottom: 2px solid;
    top: 50%;
    ${p=>p.lang==='ar'?'right':'left'}: 50%;
    position: absolute;
  }

  &:last-child {
    display: none;
  }


`;

const CircleBackdrop = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  position: absolute;
  top: 50%;
  ${p=>p.lang==='ar'?'right':'left'}: 50%;
  transform: ${p=>p.lang==='ar'?'translate(50%, -50%)':'translate(-50%, -50%)'};
  border: 2px solid;
  border-radius: 50%;
`;

function CircledImage(props) {
  const lang = props.intl.locale;
  return (
    <CircledContainer lang={lang} className={'circledContainer'}>
      <CircleBackdrop lang={lang} />
      <img src={props.src} />
    </CircledContainer>
  );
}

CircledImage.propTypes = {

};

export default injectIntl(CircledImage);
