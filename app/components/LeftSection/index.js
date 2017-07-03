/**
*
* LeftSection
*
*/

import React from 'react';
import styled from 'styled-components';

export default styled.section`
  width: 24%;
  float: ${props=>props.lang==='ar' ? 'right' : 'left'};
  text-align: left;

  &::after {
    clear: both;
  }
`;
