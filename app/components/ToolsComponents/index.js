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

  transition:  transform 0.1s ease;

  text-transform: uppercase;

  svg, svg * {
    fill: ${props=>props.color ? props.color : (props.toShow ? 'black' : '#828486')};
    width: ${props=>props.width || 'auto'};
    transition:  fill 0.1s ease;
  }

  overflow: visible;
`;
export const ToolsListMenu = styled.ul`
    padding: 0;
    padding: 10px 0 10px;
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
  margin-bottom: 26px;
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
  margin: 10px 10px 30px;
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
  // border: solid black;
  // border-width: ${props=>props.theme.lang === 'ar' ? '0 0 0 2px' : '0 2px 0 0'};
  @media(max-width: 1320px) {
  }
  @media(max-width: 970px) {
    display: flex;
    padding: 0;
    width: 100%;
    border: none;
  }
`;
export const ToolsMenuItem = styled.li`
  list-style: none;
  margin: 10px 0;

  margin-bottom: ${p=> p.marginBottom || '20px'};

  .isvg {
    &::after {
      content: ' ';
      display: block;
      clear: both;
    }
  }

  @media(max-width: 1320px) {
  }
  @media(max-width: 970px) {
    flex-grow: 1;
  }
`;

export const ToolsListContainer = styled.div``;
export const ToolsViewport = styled.div`
    height: 100%;`;

export const ToolsContainer = styled.div`
  position: absolute;

  width: ${(props) => props.showTools ? '350px' : '75px' };
  height: calc(100% - 220px)
  border: 2px solid black;
  border-bottom: none;

  ${(props) => props.lang == 'ar' ? 'right: 1195px;' : 'left: 1195px;'}
  transition: transform 0.1s ease, width 0.1s ease;
  overflow-x: hidden;
  overflow-y: hidden;

  //mobile
  @media(max-width: 1320px) {
    ${(props) => props.lang == 'ar' ? 'right: 988px;' : 'left: 988px;'}
  }
  @media(max-width: 970px) {
    position: fixed;
    bottom: 0;
    top: auto;
    left: 0;
    width: 100vw;
    height: 70px;
    background-color: white;
    z-index: 600;

    border-width: 2px;
  }
`;

export const ToolContainer = styled.div`
  ${props=>props.lang==='ar' ? 'float: right' : 'float: left'};
  text-align: left;
`;

export const BlockAddRem = styled.div`
  text-align: ${p=>p.theme.isArabic?'right':'left'};
`;

//List View
export const ListContainer = styled(ToolContainer)`
  width: 370px;
  text-align: left;
  margin-${p=>p.lang==='ar'?'left':'right'}: ${p=>p.index%2==0?'0':'130px'};
  padding-bottom: 40px;

  @media(max-width: 1320px) {
    width: 360px;
    margin-${p=>p.lang==='ar'?'left':'right'}: ${p=>p.index%2==0?'0':'30px'};
  }
  @media(max-width: 970px) {
    margin: 0;
    width: 100%;
    padding: 20px;
  }
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
