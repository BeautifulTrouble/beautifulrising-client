/**
*
* CommonComponents
*
*/

import React from 'react';
import styled from 'styled-components';
import Isvg from 'react-inlinesvg';

function CommonComponents() {
  return (
    <div>
    </div>
  );
}

export const SvgButton = styled(Isvg)`

  svg * {
    fill: ${(props) => props.selected ? '#000000' : '#b3b3b3'} !important;
    transition: 0.4s fill;
  }
`;

export const TextButton = styled.span`
  color: ${(props) => props.selected ? '#000000' : '#b3b3b3'};
  text-decoration: ${props => props.selected ? 'none' : 'underline'};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14PX;
`;

export const BorderedButton = styled.button`
  outline: none;
  text-transform: uppercase;
  border: solid 2px black;
  font-weight: bold;
  font-size: 12px;
  padding: 4px 7;
  cursor: pointer;
`;


export const CommonLeftHeader = styled.h2`
  font-size: 18px;
  text-transform: uppercase;
  padding: 5px 2px;
  text-align: center;
  border-bottom: 2px solid black;
  margin: 0;
`;

CommonComponents.propTypes = {

};

export default CommonComponents;
