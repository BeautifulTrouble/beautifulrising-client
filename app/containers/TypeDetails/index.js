/**
*
* ToolTypeSelectedFull
*
*/

import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';
import { injectIntl } from 'react-intl';
import Isvg from 'react-inlinesvg';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import MethodologyIcon from 'assets/images/type/methodologies-optionflag.svg';
import PrincipleIcon from 'assets/images/type/principles-optionflag.svg';
import StoryIcon from 'assets/images/type/stories-optionflag.svg';
import TacticIcon from 'assets/images/type/tactics-optionflag.svg';
import TheoryIcon from 'assets/images/type/theories-optionflag.svg';

import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

import RegionOptions from 'containers/RegionOptions';

import staticText from 'containers/ToolTypeArea/staticText';

const Container = styled.section`
  display: ${props=>props.show ? 'block' : 'none'};


`;
const Viewport = styled.div`
&::after {
  content: ' ';
  clear: both;
  display: block;
}
`;

const Column = styled.div`
  text-align: center;
  width: ${props=>props.width}
  float: ${p=>p.theme.isArabic?'right':'left'};
  position: relative;

  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    ${p=>p.theme.isArabic?'left':'right'}: 0;
    width: 100%;
    height: 100%;
    max-height: 160px;
    opacity: 0.3;
    z-index: -1;
    background-position: ${p=>p.theme.isArabic?'left':'right'} top;
    background-repeat: no-repeat;
    background-size: ${
      props=>{
        switch(props.bg) {
          case 'theory' :
          case 'methodology': return 'cover';
          default: return 'contain';
        }
      }
    };
    background-image: url(${
      props=>{
        switch(props.bg) {
          case 'tactic' : return TacticIcon;
          case 'principle' : return PrincipleIcon;
          case 'story': return StoryIcon;
          case 'theory': return TheoryIcon;
          case 'methodology': return MethodologyIcon;
        }
      }
    });
  }
`;
const ToolType = styled(Link)`
  margin-${p=>p.theme.isArabic ?'left':'right'}: 0.5%;
  display: block;
  text-align: ${p=>p.theme.isArabic ?'right':'left'};
  vertical-align: top;
  opacity: ${p=>p.selected?'0':'1'};
  color: #828486;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 14px;

  * {
    vertical-align: top;
  }
`;
const Head = styled.h1`
  margin: 0;
`;
const Desc = styled.p`
  margin: 0;

  &::after {
    content: ' ';
    clear: both;
    display: block;
  }
`

const Flag = styled.span`
  display: ${props=>props.selected ? 'block' : 'none'};
  position: absolute;
    width: 100%;
    opacity: .4;
    top: 0;
    z-index: -1;

  .isvg {
    width: 100%;
    overflow-y: visible;
    max-height: 160px;
    display: inline-block;

    svg {
      width: 100%;
      height: auto;
    }
  }
`;

const TypeName = styled.h1`
  text-align: ${p=>p.theme.isArabic?'left':'right'};
  margin-top: 20px;
  text-transform: uppercase;
  margin-${p=>p.theme.isArabic?'left':'right'}: 10px;
`;

const Description = styled(ContentBlock)`
  padding: 10px 0;
`;

// <Flag selected={props.label === 'story'}><Isvg src={StoryIcon} /></Flag>
// <Flag selected={props.label === 'tactic'}><Isvg src={TacticIcon} /></Flag>
// <Flag selected={props.label === 'principle'}><Isvg src={PrincipleIcon} /></Flag>
// <Flag selected={props.label === 'theory'}><Isvg src={TheoryIcon} /></Flag>
// <Flag selected={props.label === 'methodology'}><Isvg src={MethodologyIcon} /></Flag>

function TypeDetails(props) {
  console.log(props);
  if (props.filter === undefined) {
    return null;
  }
  return (
    <LanguageThemeProvider>
      <Container show={props.show}>
        <Viewport>
          <Column width="50%">
            <Description>
              <TranslatableStaticText {...staticText[props.label + 'Long']} />
            </Description>
            { props.label === 'story' ? <RegionOptions {...props} showHeader={true}/> : null}
          </Column>
        </Viewport>
      </Container>
    </LanguageThemeProvider>
  );
}

TypeDetails.propTypes = {

};

export default TypeDetails;
