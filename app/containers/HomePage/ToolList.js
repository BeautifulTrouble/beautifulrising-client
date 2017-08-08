/**
*
* ToolList
*
*/

import React from 'react';
import styled from 'styled-components';

export default styled.div`
  margin-top: 36px;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  &::after {
    content: ' ';
    clear: both;
    display: block;
  }

  @media(max-width: 700px) {
    justify-content: center;
  }
`;
