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

function ToolsComponents() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ToolsComponents.propTypes = {

};

export const ToolsButton = styled.button``;
export const ToolsListMenu = styled.ul`padding: 0;`;
export const ToolsListMenuItem = styled.li`list-style: none;`;
export const ToolsList = styled.ul`padding: 0;`;
export const ToolsListItem = styled.li`list-style: none;`;

export const ToolsMenu = styled.ul`padding: 0; width: 60px; float: left;`;
export const ToolsMenuItem = styled.li`list-style: none;`;
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
