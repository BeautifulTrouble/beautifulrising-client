/**
*
* Page
*
*/

import React from 'react';
import styled from 'styled-components';

export default styled.section`
  width: 100%;
  text-align: center;
  position: relative;
  direction: ${props=>props.lang==='ar'?'rtl': 'ltr'};
`;
