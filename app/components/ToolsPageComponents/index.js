/**
*
* ToolsPageComponents
*
*/

import React from 'react';
import styled from 'styled-components';
import SmallSectionHeader from 'components/SmallSectionHeader';
import ContentBlock from 'components/ContentBlock';
import { ToolType, ToolTitle } from 'components/ToolsComponents';
import CommonLeftHeader from 'components/CommonComponents/CommonLeftHeader';
import { Link } from 'react-router';


export const ToolInformation = styled.section`
  width: 100%;
`;

export const RealWorldToggle = styled.button`
  outline: none;
  cursor: pointer;
  transform: ${props => props.collapsed ? 'rotate(270deg)' : 'rotate(180deg)'};
  transition: transform 0.2s ease;
  margin-left: -10px;
  svg {
    width: 10px;
  }

  svg * {
    fill: black;
  }
`;

export const RealWorldItems = styled.div`
  display: ${props=>props.show ? 'block' : 'none'};
`;


export const ToolInfoSection = styled.article`
  float: ${props=>props.theme.lang === 'ar' ? 'right' : 'left'};
`;

export const ToolHeader = styled.section`
  width: 100%;
  height: 430px;
`;

export const ToolHeaderType = styled(ToolType)`
  font-size: ${p=>p.theme.isArabic?'50px':'40px'};
  margin-bottom: 20px;
  padding: 0;
  line-height: 36px;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const ToolHeaderTitle = styled(ToolTitle)`
  font-size: ${p=>p.theme.isArabic?'80px':'80px'};
  width: calc(100% - 80px);
  letter-spacing: ${p=>p.theme.isArabic?'3px':'1px'};
  margin: 0 0 20px;
  padding: 0;
  line-height: 70px;
`;

export const ToolsPageLeftHeader = styled(CommonLeftHeader)`
  text-align: ${props=>props.theme.lang === 'ar' ? 'right' : 'left'};
  font-size: 30px;
  margin: 0;
  padding: 0;

`
export const ToolsPageRightHeader = styled(SmallSectionHeader)`
  border: 0;
  margin-bottom: 5px;
`;

export const ToolsPageContributor = styled(SmallSectionHeader)`
  font-size: ${p=>p.theme.isArabic?'25px':'40px'};
  line-height: ${p=>p.theme.isArabic?'25px':'40px'};
  margin: 0;
  padding: 0;
  margin-top: 32px;
`;

export const ToolPageCaption = styled.div`
  position: absolute;
  bottom: 10px;
  color: white;
  padding-${props=>props.theme.lang==='ar'?'left':'right'}: 50px;
  font-size: 14px;
  display: ${props=>props.show ? 'block' : 'none'};

  a { color: white; }
`;
export const ToolsPageRelatedToolsHeader = styled(SmallSectionHeader)`
  font-size: 40px;
  border: none;
  background-color: #f7f7f7;
  padding: ${props=>props.theme.lang==='ar'?'10px 20px 10px 5px':'10px 5px 10px 20px'};
  margin-bottom: 10px;
  margin-top: 30px;

`;

export const ToolsRelatedArea = styled.div`
  padding: ${props=>props.theme.lang==='ar'?'10px 30px 10px 10px;':'10px 10px 10px 30px;'};
  background-color: #f7f7f7;
`;

export const ToolsRelatedContainer = styled.div`
  padding: ${props=>props.theme.lang==='ar'?'10px 30px 10px 10px;':'10px 10px 10px 30px;'};
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
  background-color: rgba(0,0,0,0.5);
  text-align: ${props=>props.theme.lang === 'ar' ? 'right' : 'left'};
  padding-${props=>props.theme.lang==='ar'?'right':'left'}: 90px;
  overflow: ${props=>props.showOverflow?'visible':'hidden'};
`;

export const ToolLeftArea = styled(ToolInfoSection)`
  width: 165px;
  text-align: ${props=>props.theme.lang === 'ar' ? 'right' : 'left'};
`;


export const ToolRightArea = styled(ToolInfoSection)`
  width: 360px;
  padding-top: 30px;

  ${props=> {
    if (props.lang === 'ar') {
      return `
        margin-left: 0;
        margin-right: 0.5%;
      `
    } else {
      return `
        margin-left: 0.5%;
        margin-right: 0;
      `
    }
  }}
`;


/**
  ToolMainArea components
**/

export const ToolMainArea = styled(ToolInfoSection)`
  width: calc(100% - 537px);
  margin-left: 0.5%;
  padding: ${props=>props.theme.lang==='ar' ? '20px 90px 20px 20px' : '20px 20px 20px 90px'};
`;

export const ToolMainContent = styled(ContentBlock)`
  text-align: ${props=>props.theme.lang === 'ar' ? 'right' : 'left'};
`;

export const ToolLearnMoreContent = styled(ToolMainContent)`
  margin-top: 36px;
`;

export const ToolMainContentHeader = styled(CommonLeftHeader)`
  border: none;
  margin: 10px 0;
  margin: 0;
`;
export const ToolReadContent = styled(ContentBlock)`
  img {
    width: 100%;
  }
`;
export const ToolReadShortContent = styled(ToolReadContent)``;
export const ToolReadFullContent = styled(ToolReadContent)`
&::after {
  content: ' ';
  display: block;
  clear: both;
}
`;

export const LearnMoreList = styled.ul`padding: 0; margin: 0;`;
export const LearnMoreItem = styled.li`
  padding: 0;
  margin: 0;
  list-style: none;
  margin-bottom: 10px;
`;
export const LearnMoreItemLink = styled.a`
  text-decoration: underline;
  font-weight: 800;
`;
export const LearnMoreItemSource = styled.span`
  * { display: inline; margin: 0; padding: 0; }
`;


// RealWorldContainer
export const RealWorldHeader = styled.h1`
text-transform: uppercase;
font-size: ${p=>p.theme.isArabic ? '36px' : '40px'};
line-height: 36px;
text-align: ${p=>p.theme.isArabic ? 'right' : 'left'};
margin-bottom: 0;

${p=> {
  if (p.theme.isArabic) {
    return `
      padding-right: 60px;
      text-indent: -60px;
    `;
  } else {
    return `
      padding-left: 48px;
      text-indent: -48px;
    `;
  }
}}

border-bottom: 6px solid black;
`;

export const RealWorldContainer = styled(ToolMainContent)`
  margin-top: 30px;
  margin-bottom: 36px;
`;
