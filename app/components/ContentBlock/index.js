/**
*
* ContentBlock
*
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { injectIntl } from 'react-intl';

const LatinContentTheme = `
  font-size: 14px;
  line-height: 22px;
  text-align: left;
`;

const ArabicContentTheme = `
  font-size: 13px;
  line-height: 24px;
  text-align: right;
`;

export default styled.div`
  ${p=>p.theme.isArabic ?
      ArabicContentTheme :
      LatinContentTheme
  };

  font-family: Avenir, Kaff, sans-serif;

  p:last-child {
    margin-bottom: 0;
  }
`;;
