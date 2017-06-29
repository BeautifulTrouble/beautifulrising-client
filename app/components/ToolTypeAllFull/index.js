/**
*
* ToolTypeAllFull
*
*/

import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';
import { FormattedMessage, injectIntl } from 'react-intl';
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
      border-right: ${p=>p.showLine?'1px solid':'none'};
    }
`;
const Viewport = styled.div`
  * {
    // text-align: ${props=>props.lang==='ar' ? 'right' : 'left'};
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
  text-align: ${props=>props.lang==='ar' ? 'right' : 'left'};
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
  font-size: ${p=>p.ar?'30px':'30px'};
  line-height: ${p=>p.ar?'40px':'1'};
  letter-spacing: ${p=>p.ar?'1px':'1px'};
`;
const Desc = styled.p`
  margin: 0;
  font-size: ${p=>p.ar?'13px':'14px'};
  line-height: ${p=>p.ar?'24px':'22px'};
  margin-top: 5px;

  &::after {
    content: ' ';
    clear: both;
    display: block;
  }
`

function ToolTypeAllFull(props) {
  const lang = props.intl.locale;
  return (
    <Container {...props} lang={lang} showLine={props.showLine}>
      <Viewport lang={lang}>
        <Row>
            <ToolType to={'/type/story'} lang={lang}>
              <Head ar={lang==='ar'}>
                <FormattedMessage {...messages.storyHead} />
              </Head>
              <Isvg src={StoryIcon} />
            </ToolType>

            <ToolType to={'/type/story'} style={{paddingTop: 35}} lang={lang}>
              <Desc ar={lang==='ar'}><FormattedMessage {...messages.storyDesc} /></Desc>
            </ToolType>
        </Row>

        <Row>
          <ToolType to={'/type/tactic'} lang={lang}>
            <Head ar={lang==='ar'}>
              <FormattedMessage {...messages.tacticHead} />
            </Head>
            <Isvg src={TacticIcon} />
            <Desc ar={lang==='ar'}><FormattedMessage {...messages.tacticDesc} /></Desc>
          </ToolType>

          <ToolType to={'/type/principle'} lang={lang}>
            <Head ar={lang==='ar'}><FormattedMessage {...messages.principleHead} /></Head>
            <Isvg src={PrincipleIcon} />
            <Desc ar={lang==='ar'}><FormattedMessage {...messages.principleDesc} /></Desc>
          </ToolType>

          <ToolType to={'/type/theory'} lang={lang}>
            <Head ar={lang==='ar'}><FormattedMessage {...messages.theoryHead} /></Head>
            <Isvg src={TheoryIcon} />
            <Desc ar={lang==='ar'}><FormattedMessage {...messages.theoryDesc} /></Desc>
          </ToolType>

          <ToolType to={'/type/methodology'} lang={lang}>
            <Head ar={lang==='ar'}><FormattedMessage {...messages.methodologyHead} /></Head>
            <Isvg src={MethodologyIcon} />
            <Desc ar={lang==='ar'}><FormattedMessage {...messages.methodologyDesc} /></Desc>
          </ToolType>
        </Row>
      </Viewport>
    </Container>
  );
}

ToolTypeAllFull.propTypes = {

};

export default injectIntl(ToolTypeAllFull);
