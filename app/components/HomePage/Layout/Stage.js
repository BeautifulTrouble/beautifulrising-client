/**
*
* Stage
*
*/

import React from 'react';
import styled from 'styled-components';
export default styled.section`
  flex-grow: 1;

  text-align: ${props=>props.lang==='ar' ? 'right' : 'left'};

  &:after {
    clear: both;
  }
  width: ${document.documentMode ? '0' : 'auto'}; /* Fix for IE */

  @media(max-width:600px) {
    width: 100%;
  }
`;
