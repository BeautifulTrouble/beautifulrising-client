/**
*
* IconButton
*
*/

import React from 'react';
import styled from 'styled-components';

export default styled.button`
  outline: none;
  text-align: center;
  width: ${props => props.width || "20px" };
  cursor: pointer;
  font-family: 'Avenir', 'Kaff';
  padding: 0;
`;
