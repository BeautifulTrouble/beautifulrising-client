/**
*
* HomePageComponents
*
*/

import React from 'react';
import styled from 'styled-components';
import CommonLeftHeader from 'components/CommonComponents/CommonLeftHeader';
import SmallSectionHeader from 'components/SmallSectionHeader';

function HomePageComponents() {
  return (
    <div>
    </div>
  );
}

HomePageComponents.propTypes = {

};


export const LeftHeader = styled(SmallSectionHeader)`
  text-align: center;
`;

export const LeftContainer = styled.div`
  padding-bottom: 10px;
  border-bottom: 2px solid black;
  margin-bottom: 50px;
  padding-top: 10px;
`;

export default HomePageComponents;
