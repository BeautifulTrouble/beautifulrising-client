/* Block */

import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

const theme = {
    bgColor: 'red',
    listItemWidth: '32%',
};

export default (props) => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}
