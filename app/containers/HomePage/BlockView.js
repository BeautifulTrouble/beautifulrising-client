/* Block */

import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

const theme = {
    bgColor: 'whitesmoke',
    listItemWidth: '260px',
    showBackground: true,
    listItemHeight: '260px',
    blockView: true,
    padding: ''
};

export default (props) => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}
