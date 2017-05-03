/**
*
* LeftSection
*
*/

import React from 'react';
import styled from 'styled-components';

export default styled.section`
  width: 29%;
  float: left;
  text-align: left;
  
  &::after {
    clear: both;
  }
`;
