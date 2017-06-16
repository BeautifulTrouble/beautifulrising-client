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
    display: ${props=>props.show ? 'block' : 'none'};

    position: relative;
    &::after {
      content: ' ';
      position: absolute;
      height: 40px;
      width: 1px;
      left: 50%;
      border-right: 1px solid;
    }
`;
const Viewport = styled.div`
  * {
    text-align: ${props=>props.lang==='ar' ? 'right' : 'left'};
  }
`;
const Row = styled.div`
  text-align: center;
  &:first-child {
    margin-bottom: 22px;
  }
  &::after {
    content: ' ';
    clear: both;
    display: block;
  }
`;
const ToolType = styled(Link)`
  width: 205px;
  display: inline-block;
  vertical-align: top;
  margin-right: ${props=>props.lang==='ar' ? 'auto' : '30px'};
  margin-left: ${props=>props.lang==='ar' ? '30px' : 'auto'}
  text-decoration: none;
  color: black;
  margin-bottom: 10px;

  &:last-child {
      margin-right: 0;
  }

  * {
    vertical-align: top;
  }

`;
const Head = styled.h3`
  margin: 0;
  text-transform: uppercase;
`;
const Desc = styled.p`
  margin: 0;
  line-height: 22px;
  font-size: 14px;
  margin-top: 5px;

  &::after {
    content: ' ';
    clear: both;
    display: block;
  }
`

function ToolTypeAllFull(props) {
  return (
    <Container {...props} >
      <Viewport lang={props.lang}>
        <Row>
            <ToolType to={'/type/story'} lang={props.lang}>
              <Head><FormattedMessage {...messages.storyHead} />
              </Head>
              <Isvg src={StoryIcon} />
            </ToolType>

            <ToolType to={'/type/story'} style={{paddingTop: 35}} lang={props.lang}>
              <Desc><FormattedMessage {...messages.storyDesc} /></Desc>
            </ToolType>
        </Row>

        <Row>
          <ToolType to={'/type/tactic'} lang={props.lang}>
            <Head>
              <FormattedMessage {...messages.tacticHead} />
            </Head>
            <Isvg src={TacticIcon} />
            <Desc><FormattedMessage {...messages.tacticDesc} /></Desc>
          </ToolType>

          <ToolType to={'/type/principle'} lang={props.lang}>
            <Head><FormattedMessage {...messages.principleHead} /></Head>
            <Isvg src={PrincipleIcon} />
            <Desc><FormattedMessage {...messages.principleDesc} /></Desc>
          </ToolType>

          <ToolType to={'/type/theory'} lang={props.lang}>
            <Head><FormattedMessage {...messages.theoryHead} /></Head>
            <Isvg src={TheoryIcon} />
            <Desc><FormattedMessage {...messages.theoryDesc} /></Desc>
          </ToolType>

          <ToolType to={'/type/methodology'} lang={props.lang}>
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
