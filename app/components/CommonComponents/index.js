/**
*
* CommonComponents
*
*/

import React from 'react';
import styled from 'styled-components';
import Isvg from 'react-inlinesvg';

import SmallHeaderBlock from 'components/SmallHeaderBlock';
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
    case "story":
    case "stories":
      return "#08eb8c";
    case "tactic":
    case "tactics":
      return "#ff9200";
    case "principle":
    case "principles":
      return "#0088ff";
    case "theory":
    case "theories":
      return "#f93732";
    case "methodology":
    case "methodologies":
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
    fill: ${(props) => props.selected ? '#000000' : '#828486'} !important;
    transition: 0.4s fill;
  }
`;

export const TextButton = styled.span`
  color: ${(props) => props.selected ? '#000000' : '#828486'};
  text-decoration: ${props => props.selected ? 'none' : 'underline'};
  font-weight: 800;
  font-family: ${props => props.selected ? 'Avenir, Kaff': 'Avenir, Kaff'};
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

CommonComponents.propTypes = {

};

export default CommonComponents;
