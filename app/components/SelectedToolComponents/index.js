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

export const SelectedToolItem = styled.div`
  text-align: left;
`;
export const SelectedToolTitle = styled.h3`
  margin: 20px 0 0;
  padding: 0;
  line-height: 1;
  font-size: 32px;
  position: relative;

  &::after {
    content: url(${props => props.flag });
    position: absolute;
    transform: scale(.75) translate(-10px,-5px);
    box-sizing: border-box;
  }

`;
export const SelectedToolSnapshot = styled.p`
font-size: 14px;
line-height: 22px;
margin: 0 0 10px ;`;
export const SelectedToolCommands = styled.ul`margin: 0; padding: 0`;
export const SelectedToolCommandItem = styled.li`
  display: inline-block;
  width: 49%;
  text-align: left;
  text-transform: uppercase;
  font-size: 14px;
  color: #959595;
  svg * {
    fill: #959595 !important;
  }
`;

export default SelectedToolComponents;
