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
  @media(max-width: 700px) {
    display: none;
  }
`;
