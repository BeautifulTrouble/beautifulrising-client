/**
*
* CommonComponents
*
*/

import React from 'react';
import styled from 'styled-components';
import Isvg from 'react-inlinesvg';

import { TYPE_STORIES, TYPE_TACTICS, TYPE_PRINCIPLES,
          TYPE_THEORIES, TYPE_METHODOLOGIES } from './constants';


function CommonComponents() {
  return (
    <div>
    </div>
  );
}

export const getToolTypeColor = (type) => {
  switch(type) {
    case TYPE_STORIES:
      return "#08eb8c";
    case TYPE_TACTICS:
      return "#ff9200";
    case TYPE_PRINCIPLES:
      return "#166ce3";
    case TYPE_THEORIES:
      return "#f93732";
    case TYPE_METHODOLOGIES:
      return "#b700c2";
  }
}

export const themeFourColumns = {
  itemWidth: '24%',
  itemMargin: '0.5%'
};

export const themeThreeColumns = {
  itemWidth: '32%',
  itemMargin: '0.5%'
};


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
  font-family: ${props => props.selected ? 'Avenir Black': 'Avenir'};
  text-transform: uppercase;
  font-size: ${p=>p.ar?'13px':'14px'};
  line-height: ${p=>p.ar?'24px':'22px'};
`;

export const BorderedButton = styled.button`
  outline: none;
  text-transform: uppercase;
  border: solid 2px black;
  font-weight: bold;
  font-size: 14px;
  padding: 4px 10px;
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
