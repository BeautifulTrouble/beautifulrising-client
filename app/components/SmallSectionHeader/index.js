/**
*
* SmallSectionHeader
*
*/

import React from 'react';
import styled from 'styled-components';

export default styled.h3`
  font-size: 30px;
  font-family: ${p=>p.theme.isArabic?'Greta':'KnockOut'};
  line-height: 30px;
  text-align: ${p=>p.theme.isArabic?'right':'left'};;
  border-bottom: 2px solid black;
  padding: 5px 2px;
  margin: 0;
  letter-spacing: 1px;
`;
