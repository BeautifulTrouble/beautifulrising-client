/**
*
* ToolTypeSelectedPartial
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

const Container = styled.section`
  display: ${props=>props.show ? 'block' : 'none'};

  &::after {
    content: ' ';
    clear: both;
    display: block;
  }
`;
const Viewport = styled.div`
  vertical-align: bottom;
  text-align: left;
  padding: 30px 20px;
  border: 3px solid black;
  border-width: 0 3px 3px;

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
  float: left;
`;
const ToolType = styled(Link)`
  margin-right: 0.5%;
  display: inline-block;
  text-align: left;
  vertical-align: bottom;
  font-size: ${(props)=>props.selected ? '20px':'14px'};
  text-decoration: ${(props)=>props.selected ? 'none':'underline'};
  text-transform: uppercase;
  margin-right: 20px;
  color: #828486;
  font-weight: bold;

  * {
    vertical-align: bottom;
  }
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
  return (
    <Container show={props.show}>
      <Viewport>
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

export default ToolTypeSelectedPartial;
