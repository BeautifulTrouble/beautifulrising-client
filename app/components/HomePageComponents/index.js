/**
*
* HomePageComponents
*
*/

import React from 'react';
import styled from 'styled-components';


function HomePageComponents() {
  return (
    <div>
    </div>
  );
}

HomePageComponents.propTypes = {

};


export const LeftHeader = styled.h2`
  font-size: 18px;
  text-transform: uppercase;
  padding: 5px 2px;
  text-align: center;
  border-bottom: 2px solid black;
  margin: 0;
`;

export const LeftContainer = styled.div`
  padding-bottom: 5px;
  border-bottom: 2px solid black;
  margin-bottom: 50px;
`;

export default HomePageComponents;
