/**
*
* CircledImage
*
*/

import React from 'react';
import styled from 'styled-components';
import Isvg from 'react-inlinesvg'
const CircledContainer = styled.div`
  width: 65%;
  padding: 20px 0;
  height: 160px;
  vertical-align: middle;
  position: relative;

  &::after {
    content: ' ';
    width: 108%;
    height: 1px;
    border-bottom: 2px solid;
    top: 50%;
    left: 50%;
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
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid;
  border-radius: 50%;
`;

function CircledImage(props) {
  return (
    <CircledContainer className={'circledContainer'}>
      <CircleBackdrop />
      <Isvg src={props.src} />
    </CircledContainer>
  );
}

CircledImage.propTypes = {

};

export default CircledImage;
