/**
*
* ToolTypeAllFull
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
    height: 280px;
    display: ${props=>props.show ? 'block' : 'none'};
`;
const Viewport = styled.div``;
const Row = styled.div`
  text-align: center;
`;
const ToolType = styled(Link)`
  width: 24%;
  display: inline-block;
  height: 100px
  text-align: left;
  vertical-align: top;

  * {
    vertical-align: top;
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

function ToolTypeAllFull(props) {
  return (
    <Container {...props} >
      <Viewport>
        <Row>
            <ToolType to={'/type/story'}>
              <Head><FormattedMessage {...messages.storyHead} />
              </Head>
              <Isvg src={StoryIcon} />
            </ToolType>

            <ToolType to={'/type/story'} style={{paddingTop: 20}}>
              <Desc><FormattedMessage {...messages.storyDesc} /></Desc>
            </ToolType>
        </Row>

        <Row>
          <ToolType to={'/type/tactic'}>
            <Head>
              <FormattedMessage {...messages.tacticHead} />
            </Head>
            <Isvg src={TacticIcon} />
            <Desc><FormattedMessage {...messages.tacticDesc} /></Desc>
          </ToolType>

          <ToolType to={'/type/principle'}>
            <Head><FormattedMessage {...messages.principleHead} /></Head>
            <Isvg src={PrincipleIcon} />
            <Desc><FormattedMessage {...messages.principleDesc} /></Desc>
          </ToolType>

          <ToolType to={'/type/theory'}>
            <Head><FormattedMessage {...messages.theoryHead} /></Head>
            <Isvg src={TheoryIcon} />
            <Desc><FormattedMessage {...messages.theoryDesc} /></Desc>
          </ToolType>

          <ToolType to={'/type/methodology'}>
            <Head><FormattedMessage {...messages.methodologyHead} /></Head>
            <Isvg src={MethodologyIcon} />
            <Desc><FormattedMessage {...messages.methodologyDesc} /></Desc>
          </ToolType>
        </Row>
      </Viewport>
    </Container>
  );
}

ToolTypeAllFull.propTypes = {

};

export default ToolTypeAllFull;
