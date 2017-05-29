/**
*
* CommonComponents
*
*/

import React from 'react';
import styled from 'styled-components';
import Isvg from 'react-inlinesvg';


function CommonComponents() {
  return (
    <div>
    </div>
  );
}

export const SvgButton = styled(Isvg)`

  svg * {
    fill: ${(props) => props.selected ? '#000000' : '#b3b3b3'} !important;
    transition: 0.4s fill;
  }
`;

CommonComponents.propTypes = {

};

export default CommonComponents;
