/**
*
* ToolsPageComponents
*
*/

import React from 'react';
import styled from 'styled-components';

import { ToolType, ToolTitle } from 'components/ToolsComponents';
import { CommonLeftHeader } from 'components/CommonComponents';
function ToolsPageComponents() {
  return (
    <div>
    </div>
  );
}

ToolsPageComponents.propTypes = {

};

export const ToolInformation = styled.section`
  width: 100%;
`;

export const ToolInfoSection = styled.article`
  float: left;
`;

export const ToolHeader = styled.section`
  width: 100%;
  height: 430px;
`;

export const ToolHeaderType = styled(ToolType)`
  font-size: 30px;
`;

export const ToolHeaderTitle = styled(ToolTitle)`
  font-size: 48px;
`;

export const ToolsPageLeftHeader = styled(CommonLeftHeader)`
  text-align: left;
`

export const ToolHeaderContainer = styled.section`
  width: 100%;
  height: 100%;
  background-image: url(${props=>props.backgroundImage})
  background-size: cover;
  background-position: center center;
`;

export const ToolHeaderViewport = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgba(0,0,0,0.3);
  text-align: left;
  padding-left: 30px;
`;

export const ToolLeftArea = styled(ToolInfoSection)`
  width: 20%;
`;

export const ToolMainArea = styled(ToolInfoSection)`
  width: 59%
  margin-left: 0.5%;
`;

export const ToolRightArea = styled(ToolInfoSection)`
  width: 19%
  margin-left: 0.5%;
  margin-right: 0.5%;
`;

export default ToolsPageComponents;
