import React from 'react';
import styled from 'styled-components';

export default styled.section`
  width: 300px;
  min-width: 300px;
  display: inline-block;
  &::after {
    clear: both;
  }

  //mobile
  @media(max-width: 1320px) {
    min-width: 215px;
    width: 215px;
  }
  @media(max-width: 970px) {
    display: none;
  }
`;
