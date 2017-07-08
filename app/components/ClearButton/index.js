/**
*
* ClearButton
*
*/

import React from 'react';
import styled from 'styled-components';

export default styled.button`
outline: none;
font-weight: 800; font-family: 'Avenir', 'Kaff', sans-serif;
font-weight: 800;
padding-${p=>p.theme.isArabic?'left':'right'}: 24px;
text-transform: uppercase;
padding-bottom: 20px;
cursor: pointer;
position: relative;
* { vertical-align: middle; }

&::before {
  content: '☒';
  font-size: 21px;
  position: absolute;
  ${p=>p.theme.isArabic?'right':'left'}: -20px;
  top: -3px;
  font-weight: 100;
  font-family: 'Avenir';
}
`;
