/**
*
* HeaderBlock
*
*/

import React from 'react';
import styled from 'styled-components';

export default styled.h2`
  text-align: ${p=>p.theme.isArabic?'right':'left'}
`;
