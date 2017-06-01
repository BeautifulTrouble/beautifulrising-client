/**
*
* ToolsPageComponents
*
*/

import React from 'react';
import styled from 'styled-components';

import { ToolType, ToolTitle } from 'components/ToolsComponents';
import { CommonLeftHeader } from 'components/CommonComponents';
import { Link } from 'react-router';

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
export const ToolsPageRightHeader = styled(CommonLeftHeader)`
  text-align: left;
  border: 0;
`;

export const ToolsPageContributor = styled(ToolsPageLeftHeader)`
  font-size: 24px;
`;

export const ToolPageCaption = styled.div`
  position: absolute;
  bottom: 10px;
  color: white;

  a { color: #828486; }
`;
export const ToolsPageRelatedToolsHeader = styled(ToolsPageLeftHeader)`
  font-size: 24px;
  border: none;
  background-color: #f7f7f7;
  padding: 10px;
  margin-bottom: 10px;
  margin-top: 30px;
`;

export const ToolsRelatedArea = styled.div`
  padding: 10px 10px 10px 30px;
  background-color: #f7f7f7;
`;

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


export const ToolRightArea = styled(ToolInfoSection)`
  width: 29%
  margin-left: 0.5%;
  margin-right: 0.5%;
`;


/**
  ToolMainArea components
**/

export const ToolMainArea = styled(ToolInfoSection)`
  width: 49%
  margin-left: 0.5%;
  padding: 20px;
`;

export const ToolMainContent = styled.div`text-align: left;`;

export const ToolMainContentHeader = styled(CommonLeftHeader)`
  text-align: left;
  border: none;
  margin-top: 20px;
`;
export const ToolReadContent = styled.div`
  font-size: 14px;

  a {
    color: #838486;
  }

  img {
    width: 100%;
  }
`;
export const ToolReadShortContent = styled(ToolReadContent)``;
export const ToolReadFullContent = styled(ToolReadContent)``;

export const LearnMoreList = styled.ul`padding: 0; margin: 0;`;
export const LearnMoreItem = styled.li`
  padding: 0;
  margin: 0;
  list-style: none;
  margin-bottom: 10px;
  font-size: 14px;
`;
export const LearnMoreItemLink = styled(Link)`
  color: #828486;
  font-weight: 700;
  text-decoration: underline;
`;
export const LearnMoreItemSource = styled.span``;


// RealWorldContainer
export const RealWorldHeader = styled.h1`
text-transform: uppercase;
font-size: 28px;
`;

export const RealWorldContainer = styled(ToolMainContent)`
margin-top: 30px;
`;

export default ToolsPageComponents;
