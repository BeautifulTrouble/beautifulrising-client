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

const Container = styled.section`
  display: ${props=>props.show ? 'block' : 'none'};

  &::after {
    content: ' ';
    clear: both;
    display: block;
  }
`;
const Viewport = styled.div``;
const Column = styled.div`
  text-align: center;
  width: ${props=>props.width}
  float: left;
`;
const ToolType = styled(Link)`
  margin-right: 0.5%;
  display: block;
  text-align: left;
  vertical-align: top;
  opacity: ${(props)=>props.selected?'0':'1'};
  * {
    vertical-align: top;
  }
`;
const Head = styled.h3`
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
`;


function ToolTypeSelectedFull(props) {

  return (
    <Container show={props.show}>
      <Viewport>
        <Column width="9%">
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
          <FormattedMessage {...messages[props.label + 'Head']} />
          <Flag selected={props.label === 'story'}><Isvg src={StoryIcon} /></Flag>
          <Flag selected={props.label === 'tactic'}><Isvg src={TacticIcon} /></Flag>
          <Flag selected={props.label === 'principle'}><Isvg src={PrincipleIcon} /></Flag>
          <Flag selected={props.label === 'theory'}><Isvg src={TheoryIcon} /></Flag>
          <Flag selected={props.label === 'methodology'}><Isvg src={MethodologyIcon} /></Flag>
        </Column>
        <Column width="50%">
          <FormattedMessage {...messages[props.label + 'Long']} />
        </Column>
      </Viewport>
    </Container>
  );
}

ToolTypeSelectedFull.propTypes = {

};

export default ToolTypeSelectedFull;
