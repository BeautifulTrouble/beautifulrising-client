/**
*
* ToolTypeSelectedFull
*
*/

import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';
import { FormattedMessage } from 'react-intl';
import messages from '../ToolTypeArea/messages';
import Isvg from 'react-inlinesvg';
import MethodologyIcon from 'assets/images/type/methodologies-optionflag.svg';
import PrincipleIcon from 'assets/images/type/principles-optionflag.svg';
import StoryIcon from 'assets/images/type/stories-optionflag.svg';
import TacticIcon from 'assets/images/type/tactics-optionflag.svg';
import TheoryIcon from 'assets/images/type/theories-optionflag.svg';

import RegionOptions from 'components/RegionOptions';

const Container = styled.section`
  display: ${props=>props.show ? 'block' : 'none'};


`;
const Viewport = styled.div`
padding: 20px;
border-width: 0 2px 2px;
border-style: solid;
&::after {
  content: ' ';
  clear: both;
  display: block;
}
`;

const Column = styled.div`
  text-align: center;
  width: ${props=>props.width}
  float: left;
  position: relative;
`;
const ToolType = styled(Link)`
  margin-right: 0.5%;
  display: block;
  text-align: left;
  vertical-align: top;
  opacity: ${(props)=>props.selected?'0':'1'};
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
    overflow-y: hidden;
    max-height: 160px;
    display: inline-block;

    svg {
      width: 100%;
      height: auto;
    }
  }
`;

const TypeName = styled.h1`
  text-align: right;
  margin-top: 20px;
  text-transform: uppercase;
  margin-right: 10px;
`;

const Description = styled.div`
  font-size: 14px;
  text-align: left;
  padding: 0 10px 0 10px;
`;

function ToolTypeSelectedFull(props) {
  return (
    <Container show={props.show}>
      <Viewport>
        <Column width="15%">
          <ToolType to={'/'}>All</ToolType>
          <ToolType to={'/type/story'} selected={props.label === 'story'}>
            <FormattedMessage {...messages.storyHead} />
          </ToolType>
          <ToolType to={'/type/tactic'} selected={props.label === 'tactic'}>
            <FormattedMessage {...messages.tacticHead} />
          </ToolType>
          <ToolType to={'/type/principle'} selected={props.label === 'principle'}>
            <FormattedMessage {...messages.principleHead} />
          </ToolType>
          <ToolType to={'/type/theory'} selected={props.label === 'theory'}>
            <FormattedMessage {...messages.theoryHead} />
          </ToolType>
          <ToolType to={'/type/methodology'} selected={props.label === 'methodology'}>
            <FormattedMessage {...messages.methodologyHead} />
          </ToolType>
        </Column>
        <Column width="40%">
          <TypeName>
            <FormattedMessage {...messages[props.label + 'Head']} />
          </TypeName>
          <Flag selected={props.label === 'story'}><Isvg src={StoryIcon} /></Flag>
          <Flag selected={props.label === 'tactic'}><Isvg src={TacticIcon} /></Flag>
          <Flag selected={props.label === 'principle'}><Isvg src={PrincipleIcon} /></Flag>
          <Flag selected={props.label === 'theory'}><Isvg src={TheoryIcon} /></Flag>
          <Flag selected={props.label === 'methodology'}><Isvg src={MethodologyIcon} /></Flag>
        </Column>
        <Column width="44%">
          <Description>
            <FormattedMessage {...messages[props.label + 'Long']} />
          </Description>
          { props.label === 'story' ? <RegionOptions {...props} showHeader={true}/> : null}
        </Column>
      </Viewport>
    </Container>
  );
}

ToolTypeSelectedFull.propTypes = {

};

export default ToolTypeSelectedFull;
