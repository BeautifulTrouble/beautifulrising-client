/**
*
* ToolTypeSelectedPartial
*
*/

import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';
import { injectIntl } from 'react-intl';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from '../ToolTypeArea/staticText';

import Isvg from 'react-inlinesvg';
import RegionOptions from 'containers/RegionOptions';
import MethodologyIcon from 'assets/images/type/methodologies-optionflag.svg';
import PrincipleIcon from 'assets/images/type/principles-optionflag.svg';
import StoryIcon from 'assets/images/type/stories-optionflag.svg';
import TacticIcon from 'assets/images/type/tactics-optionflag.svg';
import TheoryIcon from 'assets/images/type/theories-optionflag.svg';

const Container = styled.section`
  display: ${props=>props.show ? 'block' : 'none'};

  &::after {
    content: ' ';
    clear: both;
    display: block;
  }
`;
const Viewport = styled.div`
  vertical-align: top;
  text-align: ${p=>p.lang==='ar'?'right':'left'};
  padding: 30px 20px;
  border-width: 0 2px 2px;
  border-style: solid;

  &::after {
    content: ' ';
    display: block;
    clear: both;
  }

  * {
    vertical-align: bottom;
  }
`;
const Column = styled.div`
  text-align: center;
  width: ${props=>props.width}
  float: ${p=>p.lang==='ar'?'right':'left'};
`;
const ToolType = styled(Link)`
  margin-${p=>p.lang==='ar'?'left':'right'}: 0.5%;
  display: inline-block;
  text-align: ${p=>p.lang==='ar'?'right':'left'};
  vertical-align: bottom;
  font-size: ${(props)=>props.selected ? '30px':'14px'};
  text-decoration: ${(props)=>props.selected ? 'none':'underline'};
  font-family: ${props=>props.selected?'Knockout, Greta':'Avenir, Kaff'}, sans-serif;
  text-transform: uppercase;
  margin-${p=>p.lang==='ar'?'left':'right'}: 10px;
  margin-bottom: ${(props)=>props.selected ? '4px':'0'};
  color: ${(props)=>props.selected ? 'black':'#828486'};
  font-weight: ${props=>props.selected ? 'normal' : 'bold'};
  line-height: 0;

  * {
    vertical-align: bottom;
  }
`;

const LinkArea = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const Flag = styled.span`
  display: ${props=>props.selected ? 'block' : 'none'};
    width: 350px;
    opacity: .4;
    top: 0;


  .isvg {
    width: 100%;
    overflow-y: hidden;
    max-height: 160px;
    display: inline-block;

    svg {
      width: 100%;
      height: auto;
    }
  }
`;
const FlagContainer = styled.div`
  z-index: -1;
  position: absolute;
  top: 120px;
  display: none;
`;

function ToolTypeSelectedPartial(props) {
  const lang = props.intl.locale;
  return (
    <Container show={props.show}>
      <Viewport lang={lang}>
          <LinkArea>
            <ToolType lang={lang} to={'/'}>
              <TranslatableStaticText {...staticText.allHead} />
            </ToolType>
            <ToolType lang={lang} to={'/type/story'} selected={props.label === 'story'}>
              <TranslatableStaticText {...staticText.storyHead} />
            </ToolType>
            <ToolType lang={lang} to={'/type/tactic'} selected={props.label === 'tactic'}>
              <TranslatableStaticText {...staticText.tacticHead} />
            </ToolType>
            <ToolType lang={lang} to={'/type/principle'} selected={props.label === 'principle'}>
              <TranslatableStaticText {...staticText.principleHead} />
            </ToolType>
            <ToolType lang={lang} to={'/type/theory'} selected={props.label === 'theory'}>
              <TranslatableStaticText {...staticText.theoryHead} />
            </ToolType>
            <ToolType lang={lang} to={'/type/methodology'} selected={props.label === 'methodology'}>
              <TranslatableStaticText {...staticText.methodologyHead} />
            </ToolType>
          </LinkArea>
          { props.label === 'story' ? <RegionOptions {...props} showHeader={false}/> : null}
      </Viewport>
      <FlagContainer>
        <Flag selected={props.label === 'story'}><Isvg src={StoryIcon} /></Flag>
        <Flag selected={props.label === 'tactic'}><Isvg src={TacticIcon} /></Flag>
        <Flag selected={props.label === 'principle'}><Isvg src={PrincipleIcon} /></Flag>
        <Flag selected={props.label === 'theory'}><Isvg src={TheoryIcon} /></Flag>
        <Flag selected={props.label === 'methodology'}><Isvg src={MethodologyIcon} /></Flag>
      </FlagContainer>
    </Container>
  );
}

ToolTypeSelectedPartial.propTypes = {

};

export default injectIntl(ToolTypeSelectedPartial);
