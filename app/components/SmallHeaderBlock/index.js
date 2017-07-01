/**
*
* SmallHeaderBlock
*
*/

import React from 'react';
import styled from 'styled-components';

export default styled.h4`
  font-size: 19px;
  line-height: 22px;
  text-align: ${ p=>p.theme.isArabic ? 'right' : 'left'};
  font-family: Avenir, Kaff, sans-serif;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0;
`;
