/* Block */

import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

const theme = {
    bgColor: 'red',
};

export default (props) => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}
