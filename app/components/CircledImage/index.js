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
  border-radius: 50%;
  border: 1px solid black;
  padding: 20px 0;
  height: 160px;
  vertical-align: middle;
`;

function CircledImage(props) {
  return (
    <CircledContainer>
      <Isvg src={props.src} />
    </CircledContainer>
  );
}

CircledImage.propTypes = {

};

export default CircledImage;
