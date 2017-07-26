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
  display: block;
  height: auto
  text-align: ${p=>p.theme.isArabic?'right':'left'};
  vertical-align: top;
  text-transform: uppercase;
  color: black;
  text-decoration: none;

  * {
    vertical-align: top;
  }

  opacity: ${p=>p.selected?1:0.5};

  svg {
    width: 166px;
  }
  margin-bottom: 20px;
`;
const BigHead = styled.h2`margin:0`;
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

function ToolTypeAll(props) {

  const {label, filter} = props.params;


  return (
    <LanguageThemeProvider>
      <Container {...props}>
        <Viewport>
          <Row>
            <ToolType to={'/'} selected={label === undefined}>
              <BigHead><TranslatableStaticText {...staticText.allHead} /></BigHead>
            </ToolType>
            <ToolType to={'/type/story'} selected={label === 'story' && filter === 'type'}>
              <Head><TranslatableStaticText {...staticText.storyHead} /></Head>
              <Isvg src={StoryIcon} />
            </ToolType>
            <ToolType to={'/type/tactic'} selected={label === 'tactic' && filter === 'type'}>
              <Head><TranslatableStaticText {...staticText.tacticHead} /></Head>
              <Isvg src={TacticIcon} />
            </ToolType>

            <ToolType to={'/type/principle'} selected={label === 'principle' && filter === 'type'}>
              <Head><TranslatableStaticText {...staticText.principleHead} /></Head>
              <Isvg src={PrincipleIcon} />
            </ToolType>

            <ToolType to={'/type/theory'} selected={label === 'theory' && filter === 'type'}>
              <Head><TranslatableStaticText {...staticText.theoryHead} /></Head>
              <Isvg src={TheoryIcon} />
            </ToolType>

            <ToolType to={'/type/methodology'} selected={label === 'methodology' && filter === 'type'}>
              <Head><TranslatableStaticText {...staticText.methodologyHead} /></Head>
              <Isvg src={MethodologyIcon} />
            </ToolType>
          </Row>
        </Viewport>
      </Container>
    </LanguageThemeProvider>
  );
}

ToolTypeAll.propTypes = {

};

export default ToolTypeAll;
