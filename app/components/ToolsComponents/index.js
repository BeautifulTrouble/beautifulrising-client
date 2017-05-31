/**
*
* ToolsComponents
*
*/

import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { TYPE_STORIES, TYPE_TACTICS, TYPE_PRINCIPLES,
          TYPE_THEORIES, TYPE_METHODOLOGIES } from './constants';

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

export const ToolsButton = styled.button`outline: none; cursor: pointer;`;
export const ToolsListMenu = styled.ul`padding: 0;`;
export const ToolsListMenuItem = styled.li`
  list-style: none;
  display: inline-block;
  width: 49%;
  text-align: center;
`;

export const ToolType = styled.h3`
  margin: 0;
  font-size: 16px;
  padding-top: 20px;
  color: ${props => getToolTypeColor(props.type) }
`;

export const ToolTitle = styled.h1`
  font-size: 20px;
  margin: 0;
  > a {
    color: ${props=>props.color || 'black'};
  }
  color: ${props=>props.color || 'black'};
`;
export const ToolsList = styled.ul`padding: 0;`;
export const ToolsListItem = styled.li`list-style: none;`;

export const ToolsMenu = styled.ul`padding: 0; width: 60px; float: left;`;
export const ToolsMenuItem = styled.li`
  list-style: none;
`;

export const ToolsListContainer = styled.div``;
export const ToolsViewport = styled.div` width: 300px`;

export const ToolsContainer = styled.div`
  position: fixed;
  right: 50%;
  width: ${(props) => props.showTools ? '300px' : '65px' };
  height: calc(100vh - 170px);
  border: 3px solid black;
  top: 160px;
  transform: translateX(${(props) => props.showTools ? '750px' : '600px' });
  transition: transform 0.5s, width 0.5s;
  overflow-x: hidden;
  `;

export const ToolContainer = styled.div`
  float: left;
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
  width: 260px;
  height: 260px;

`;
export const BlockViewport = styled(ToolViewport)`
  background-color: rgba(0,0,0,0.3);
  padding: 10px;
  width: 100%;
  height: 100%;
  position: relative;
`;
export const BlockSpiel = styled.p`
  color: ${props=>getToolTypeColor(props.type)};
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  opacity: ${props=>props.show?'1':'0'};
  transition: opacity 0.2s;
`;

export const BlockViewTitleArea = styled.div`
  position: absolute;
  top: ${props=>props.top || '10px'};
  left: 10px;
  z-index: 100;
  opacity: ${props=>props.show?'1':'0'};
  transition: opacity 0.2s;
`;
export const BlockAddRem = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;

//List View
export const ListContainer = styled(ToolContainer)`
  width: 48%;
  height: 200px;
  text-align: left;
`;

export const ListViewport = styled(ToolViewport)`
  background-color: none;
  padding: 0 10px 0 50px;
  > hr {
    border-width: 2px;
    border-color: black;
    float: left;
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
