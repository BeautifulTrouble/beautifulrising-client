/**
*
* Body
*
*/

import React from 'react';
import styled from 'styled-components';

export default styled.section`
  margin-top: 90px;
  display: inline-block;
  max-width:1100px;
  width: 100%;
  position: relative;
  margin-left: ${(props) => props.showTools ? (props.lang==='ar' ? '210px' : '-210px') : '0'};
  transition: margin-left 0.5s;
`;
