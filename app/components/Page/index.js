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
  direction: ${p=>p.theme.lang==='ar'?'rtl': 'ltr'};
  * {
    ${p=>p.theme.lang==='ar'?'rtl': 'ltr'};
  }
  div > p, div > span, span > p, li > a {
    ${p=> {
      if (p.theme.lang === 'ar') {
        return `
          font-size: 13px;
          line-height: 24px;
        `;
      } else {
        return `
          font-size: 14px;
          line-height: 22px;
        `;
      }
    }}
  }
`;
