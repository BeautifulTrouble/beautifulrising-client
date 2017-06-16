/**
*
* Stage
*
*/

import React from 'react';
import styled from 'styled-components';
export default styled.section`
  width: 75%;
  float: ${props=>props.lang==='ar' ? 'right' : 'left'};
  ${props=>props.lang==='ar' ? 'margin-right: 10px;' : 'margin-left: 10px;'};

  text-align: ${props=>props.lang==='ar' ? 'right' : 'left'};

  * {
    text-align: ${props=>props.lang==='ar' ? 'right' : 'left'};
  }
  &:after {
    clear: both;
  }
`;
