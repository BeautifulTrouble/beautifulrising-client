/**
*
* HomePageComponents
*
*/

import React from 'react';
import styled from 'styled-components';
import { CommonLeftHeader } from 'components/CommonComponents';

function HomePageComponents() {
  return (
    <div>
    </div>
  );
}

HomePageComponents.propTypes = {

};


export const LeftHeader = styled(CommonLeftHeader)``;

export const LeftContainer = styled.div`
  padding-bottom: 5px;
  border-bottom: 2px solid black;
  margin-bottom: 50px;
`;

export default HomePageComponents;
