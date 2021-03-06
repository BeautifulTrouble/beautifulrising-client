/**
*
* ToolTypeAllPartial
*
*/

import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from '../ToolTypeArea/staticText';

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
  margin-${p=>p.theme.isArabic?'left':'right'}: 0.5%;
  display: inline-block;
  height: 100px
  text-align: ${p=>p.theme.isArabic?'right':'left'};
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
    <LanguageThemeProvider>
      <Container {...props}>
        <Viewport>
          <Row>
            <ToolType to={'/type/story'}>
              <Head><TranslatableStaticText {...staticText.storyHead} /></Head>
              <Isvg src={StoryIcon} />
            </ToolType>
            <ToolType to={'/type/tactic'}>
              <Head><TranslatableStaticText {...staticText.tacticHead} /></Head>
              <Isvg src={TacticIcon} />
            </ToolType>

            <ToolType to={'/type/principle'}>
              <Head><TranslatableStaticText {...staticText.principleHead} /></Head>
              <Isvg src={PrincipleIcon} />
            </ToolType>

            <ToolType to={'/type/theory'}>
              <Head><TranslatableStaticText {...staticText.theoryHead} /></Head>
              <Isvg src={TheoryIcon} />
            </ToolType>

            <ToolType to={'/type/methodology'}>
              <Head><TranslatableStaticText {...staticText.methodologyHead} /></Head>
              <Isvg src={MethodologyIcon} />
            </ToolType>
          </Row>
        </Viewport>
      </Container>
    </LanguageThemeProvider>
  );
}

ToolTypeAllPartial.propTypes = {

};

export default ToolTypeAllPartial;
