/**
*
* ToolsComponents
*
*/

import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import Isvg from 'react-inlinesvg';

import messages from './messages';

import { TYPE_STORIES, TYPE_TACTICS, TYPE_PRINCIPLES,
          TYPE_THEORIES, TYPE_METHODOLOGIES } from './constants';

import RealWorldIconImage from 'assets/images/icons/real-world.svg';



function ToolsComponents() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ToolsComponents.propTypes = {

};

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
  color:${props => props.color};
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
  font-size: 14px;
  line-height: 22px;

  svg, svg * {
    fill: ${props=>props.color ? props.color : (props.toShow ? 'black' : '#AFAFAF')};
    width: ${props=>props.width || 'auto'};
    transition:  fill 0.4s ease;
  }
`;
export const ToolsListMenu = styled.ul`
    padding: 0;
    padding: 10px 0 10px;
    border: 2px solid;
    border-width: 0 0 3px;
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
  font-size: 22px;
  padding-top: 20px;
  font-family: 'Paint Hand', 'Massira Spray', serif;
  color: ${props => getToolTypeColor(props.type) }
`;

export const ToolTitle = styled.h1`
  font-size: 32px;
  letter-spacing: 1px;
  font-weight: normal;
  margin: 0;
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
  margin: 10px;
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
  height: calc(100vh - 170px);
  border: 2px solid black;
  top: 93px;

  ${props=>props.theme.lang == 'ar' ? 'left: 50%' : 'right: 50%;'}
  transform: translateX(${(props) => props.showTools ?
      (props=>props.theme.lang == 'ar' ? '-685px' : '685px') :
      (props=>props.theme.lang == 'ar' ? '-640px' : '640px') });
  transition: transform 0.5s, width 0.5s;
  overflow-x: hidden;
  overflow-y: hidden;
  `;

export const ToolContainer = styled.div`
  ${props=>props.lang==='ar' ? 'float: right' : 'float: left'};
  margin-right: 10px;
  margin-bottom: 10px;
  text-align: left;
`;
export const ToolViewport = styled.div`
  margin: 0;
  padding: 0;
`
// Block View
export const BlockContainer = styled(ToolContainer)`
  background-image: ${props => props.background};
  background-size: cover;
  background-position: center;
  width: 250px;
  height: 250px;
  margin: 10px;
  margin-${p=>p.lang==='ar'?'left':'right'}: 15px;
  margin-${p=>p.lang==='ar'?'right':'left'}: 5px;
`;
export const BlockViewport = styled(ToolViewport)`
  background-color: rgba(0,0,0,0.5);
  padding: 10px;
  width: 100%;
  height: 100%;
  position: relative;
`;
export const BlockSpiel = styled.div`
  color: ${props=>getToolTypeColor(props.type)};
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  font-weight: 800;
  opacity: ${props=>props.show?(props.forceShow?'0':'1'):'0'};
  transition: opacity 0.2s;
`;

export const BlockViewTitleArea = styled.div`
  position: absolute;
  left: 10px;
  padding-right: 10px;
  z-index: 100;
  width: calc(100% - 10px);
  opacity: ${props=>props.show ? '1': (props.forceShow?'1':'0')};
  transition: opacity 0.2s;
`;
export const BlockAddRem = styled.div`
`;

//List View
export const ListContainer = styled(ToolContainer)`
  width: 48%;
  height: 190px;
  text-align: left;

`;

export const ListViewport = styled(ToolViewport)`
  background-color: none;
  padding: 0 10px 0 50px;
  position: relative;

  &::before{
    content: ' ';
    width: 53px;
    height: 1px;
    border-bottom: 2px solid;
    position: absolute;
    top: 0px;
    left: 50px;
  }

  h3 {
    padding-top: 5px;
  }
`;
export const ListSpiel = styled.p`
  margin: 0;
  font-size: 12px;
`;
export const ListDivider = styled.h3`
  color: black;
  border-color: black;
  border-width: 2px;
  margin-top: 0px;
  width: 60px;
`;
export default ToolsComponents;
