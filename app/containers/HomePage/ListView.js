/* ListView */

import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

const theme = {
    bgColor: 'none',
    listItemWidth: '48%',
    listItemHeight: '200px',
    //Spiel
    spielFontSize: '12px',
    spielColor: '#000000'

};

export default (props) => {
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}
