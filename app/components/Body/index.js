/**
*
* Body
*
*/

import React from 'react';
import styled from 'styled-components';

export default styled.section`
  padding-top: 217px;
  display: inline-block;
  max-width: 1170px;
  width: 100%;
  position: relative;
  left: ${(props) => props.showTools ? (props.lang==='ar' ? '230px' : '-230px') : '0'};
  transition: left 0.3s ease;

  // Mobile
  @media(max-width: 1170px) {
    max-width: 100%;
    padding-top: 120px;
    left: 0 !important;
    padding-bottom: 70px;
  }
`;
