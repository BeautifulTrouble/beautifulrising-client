/**
*
* SelectedToolComponents
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function SelectedToolComponents() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export const SelectedToolItem = styled.div``;
export const SelectedToolTitle = styled.h4``;
export const SelectedToolSnapshot = styled.p``;
export const SelectedToolCommands = styled.ul``;
export const SelectedToolCommandItem = styled.li`
  display: inline-block;
  width: 49%;
  text-align: center;
`;

export default SelectedToolComponents;
