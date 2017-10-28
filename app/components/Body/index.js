/**
*
* Body
*
*/

import React from 'react';
import styled from 'styled-components';

export default styled.section`
  padding-top: 220px;
  display: inline-block;
  max-width: 1170px;
  width: 100%;
  position: relative;
  // Calculate the space on either side of the 1170px container (innerWidth - 1170)/2
  // then give 400px space for tool panel, ignoring any negative values with Math.min
  ${(props) => props.showTools ? ((props.lang == 'ar' ? 'right:' : 'left:') + Math.min(((innerWidth - 1170)/2 - 400), 0) + 'px') : ''};
  transition: left 0.1s ease;

  // Mobile
  @media(max-width: 1320px) {
    max-width: 100%;
    padding-top: 120px;
    left: 0 !important;
    right: 0 !important;
    padding-bottom: 70px;
  }
`;
