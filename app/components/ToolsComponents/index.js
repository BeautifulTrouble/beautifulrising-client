/**
*
* ToolsComponents
*
*/

import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { Link } from 'react-router';

import ContentBlock from 'components/ContentBlock';
import Isvg from 'react-inlinesvg';

import messages from './messages';

import { TYPE_STORIES, TYPE_TACTICS, TYPE_PRINCIPLES,
          TYPE_THEORIES, TYPE_METHODOLOGIES } from './constants';

import RealWorldIconImage from 'assets/images/icons/real-world.svg';

export const getToolTypeColor = (type) => {
  switch(type) {
    case TYPE_STORIES:
      return "#08eb8c";
    case TYPE_TACTICS:
      return "#ff9200";
    case TYPE_PRINCIPLES:
      return "#0088ff";
    case TYPE_THEORIES:
      return "#f93732";
    case TYPE_METHODOLOGIES:
      return "#b700c2";
  }
}

/*** START OF TOOLS ICONS ***/
export const RealWorldIcon = styled(Isvg)`
  svg {
    fill: ${props=>props.type ? getToolTypeColor(props.type) : 'red'};

    .circle {
      fill: black;
    }
  }
`;

export const PotentialRiskIcon = styled(Isvg)`
  svg {
    fill: ${props=>props.type ? getToolTypeColor(props.type) : 'red'};
  }
`;
/*** END OF TOOLS ICONS ***/

export const ToolsButton = styled.button`
  outline: none;
  cursor: pointer;
  ${p => p.color ? `color: ${p.color};` : ''}
  font-weight: bold;
  padding: 0;
  img { margin-right: 10px;}
  display: inline-block;
  ${
    props=> {
      if (props.lang&&props.lang==='ar') {
        return `transform: ${props.toShow&&props.rotate ? 'rotate(0)' : 'rotate(180deg)'};`
      } else {
        return `transform: ${props.toShow&&props.rotate ? 'rotate(180deg)' : 'rotate(0)'};`
      }
    }
  }

  transition:  transform 0.4s ease;

  text-transform: uppercase;

  svg, svg * {
    fill: ${props=>props.color ? props.color : (props.toShow ? 'black' : '#828486')};
    width: ${props=>props.width || 'auto'};
    transition:  fill 0.4s ease;
  }
`;
export const ToolsListMenu = styled.ul`
    padding: 0;
    padding: 10px 0 10px;
    border-bottom: 2px solid black;
    margin: 0;
    display: ${props=>props.show?'block':'none'};

    & > li:first-child {
      ${props=>props.lang==='ar' ? 'border-left' : 'border-right'}: 2px solid;
    }
`;
export const ToolsListMenuItem = styled.li`
  list-style: none;
  display: inline-block;
  width: 49%;
  text-align: center;
`;

export const ToolType = styled.h3`
  margin: 0;
  font-size: ${p=>p.ar?'32px':'20px'};
  letter-spacing: ${p=>p.ar?'3px':'0'};
  text-align: ${p=>p.theme.isArabic?'right':'left'};
  padding-top: 20px;
  font-family: 'Paint Hand', 'Massira Spray', serif;
  color: ${props => getToolTypeColor(props.type) };
`;

export const ToolTitle = styled.h1`
  font-size: 32px;
  letter-spacing: 1px;
  font-weight: normal;
  margin: 0;
  margin-bottom: ${p=>p.theme.isArabic?'5px':'0'};
  text-align: ${p=>p.theme.isArabic?'right':'left'};
  font-size: ${p=>p.theme.isArabic?'30px':'30px'};
  line-height: 1;

  > a {
    color: ${props=>props.color || 'black'};
  }
  color: ${props=>props.color || 'black'};
`;
export const ToolsList = styled.ul`
padding: 0 0 0 5px;
margin: 0;
`;
export const ToolsListItem = styled.li`
  list-style: none;
  margin: 10px 10px 20px;
  border-top: 2px solid;

  &:first-child {
    border: none;
  }
`;

export const ToolsMenu = styled.ul`
  width: 73px;
  float: ${props=>props.theme.lang === 'ar' ? 'right' : 'left'};
  height: 100%;
  margin: 0;
  padding: 20px 0;
  border: solid black;
  border-width: ${props=>props.theme.lang === 'ar' ? '0 0 0 2px' : '0 2px 0 0'};
`;
export const ToolsMenuItem = styled.li`
  list-style: none;
  margin: 10px 0 20px;
  .isvg {
    &::after {
      content: ' ';
      display: block;
      clear: both;
    }
  }
`;

export const ToolsListContainer = styled.div``;
export const ToolsViewport = styled.div`
    ${(props) => props.showTools ? '350px' : '75px' };
height: 100%;`;

export const ToolsContainer = styled.div`
  position: fixed;

  width: ${(props) => props.showTools ? '350px' : '75px' };
  height: calc(100vh - 200px)
  border: 2px solid black;
  top: 177px;

  ${props=>props.theme.lang == 'ar' ? 'left: 50%' : 'right: 50%;'}
  transform: translateX(${(props) => props.showTools ?
      (props=>props.theme.lang == 'ar' ? '-685px' : '685px') :
      (props=>props.theme.lang == 'ar' ? '-640px' : '640px') });
  transition: transform 0.3s ease, width 0.3s ease;
  overflow-x: hidden;
  overflow-y: hidden;
  `;

export const ToolContainer = styled.div`
  ${props=>props.lang==='ar' ? 'float: right' : 'float: left'};
  margin-right: 10px;
  margin-bottom: 10px;
  text-align: left;
`;

export const BlockAddRem = styled.div`
  text-align: ${p=>p.theme.isArabic?'right':'left'};
`;

//List View
export const ListContainer = styled(ToolContainer)`
  width: 48%;
  height: 190px;
  text-align: left;
`;

export const ListSpiel = styled(ContentBlock)`
  margin: 0;
`;
export const ListDivider = styled.h3`
  color: black;
  border-color: black;
  border-width: 2px;
  margin-top: 0px;
  width: 60px;
`;
