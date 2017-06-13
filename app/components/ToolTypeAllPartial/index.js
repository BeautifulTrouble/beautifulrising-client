/**
*
* ToolTypeAllPartial
*
*/

import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';
import { FormattedMessage } from 'react-intl';
import messages from '../ToolTypeArea/messages';
import Isvg from 'react-inlinesvg';
import MethodologyIcon from 'assets/images/type/methodologies-option.svg';
import PrincipleIcon from 'assets/images/type/principles-option.svg';
import StoryIcon from 'assets/images/type/stories-option.svg';
import TacticIcon from 'assets/images/type/tactics-option.svg';
import TheoryIcon from 'assets/images/type/theories-option.svg';

const Container = styled.section`
  display: ${props=>props.show ? 'block' : 'none'};
`;
const Viewport = styled.div``;
const Row = styled.div`
  text-align: center;
`;
const ToolType = styled(Link)`
  width: 19%;
  margin-right: 0.5%;
  display: inline-block;
  height: 100px
  text-align: left;
  vertical-align: top;
  text-transform: uppercase;
  color: black;
  text-decoration: none;

  * {
    vertical-align: top;
  }

  svg {
    width: 166px;
  }
`;
const Head = styled.h3`
  margin: 0;
`;
const Desc = styled.p`
  margin: 0;

  ::after {
    content: ' ';
    clear: both;
    display: block;
  }
`

function ToolTypeAllPartial(props) {
  return (
    <Container {...props}>
      <Viewport>
        <Row>
          <ToolType to={'/type/story'}>
            <Head><FormattedMessage {...messages.storyHead} /></Head>
            <Isvg src={StoryIcon} />
          </ToolType>
          <ToolType to={'/type/tactic'}>
            <Head><FormattedMessage {...messages.tacticHead} /></Head>
            <Isvg src={TacticIcon} />
          </ToolType>

          <ToolType to={'/type/principle'}>
            <Head><FormattedMessage {...messages.principleHead} /></Head>
            <Isvg src={PrincipleIcon} />
          </ToolType>

          <ToolType to={'/type/theory'}>
            <Head><FormattedMessage {...messages.theoryHead} /></Head>
            <Isvg src={TheoryIcon} />
          </ToolType>

          <ToolType to={'/type/methodology'}>
            <Head><FormattedMessage {...messages.methodologyHead} /></Head>
            <Isvg src={MethodologyIcon} />
          </ToolType>
        </Row>
      </Viewport>
    </Container>
  );
}

ToolTypeAllPartial.propTypes = {

};

export default ToolTypeAllPartial;
