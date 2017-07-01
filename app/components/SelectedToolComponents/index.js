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
  text-align: ${p=>p.lang==='ar'?'right':'left'};
`;
export const SelectedToolTitle = styled.h3`
  margin: 20px 0 0;
  padding: 0;
  line-height: 30px;
  font-size: 30px;
  position: relative;
  a {
    color: black;
    text-decoration: none;
  }
  &::after {
    content: url(${props => props.flag });
    position: absolute;
    transform: scale(.75) translate(-10px,-5px);
    box-sizing: border-box;
  }

`;
export const SelectedToolSnapshot = styled.div`
margin: 0 0 10px ;`;

export const SelectedToolCommands = styled.ul`margin: 0; padding: 0`;
export const SelectedToolCommandItem = styled.li`
  display: inline-block;
  width: 49%;
  text-align: ${p=>p.lang==='ar'?'right':'left'};
  text-transform: uppercase;
  button { text-transform: uppercase; font-weight: bold; }
  color: #959595;
  svg * {
    fill: #959595;
  }

  .shareArea {
    top: -30px;
    ${p=>p.theme.lang==='ar'?'right':'left'}: 20px;
    background-color: lightgray;
  }
`;

export default SelectedToolComponents;
