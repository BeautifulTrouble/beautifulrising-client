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

const getToolTypeColor = (type) => {
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

export const ToolsButton = styled.button``;
export const ToolsListMenu = styled.ul`padding: 0;`;
export const ToolsListMenuItem = styled.li`
  list-style: none;
  display: inline-block;
  width: 49%;
  text-align: center;
`;

export const ToolType = styled.h3`
  margin: 12px 0 0;
  font-size: 16px;
  color: ${props => getToolTypeColor(props.type) }
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
export default ToolsComponents;
