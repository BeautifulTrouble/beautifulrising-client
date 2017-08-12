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
import ContentBlock from 'components/ContentBlock';

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

  @media(max-width: 700px) {
    text-align: center;
    width: 100%;
    .isvg {
      display: none;
    }
  }
`;
const BigHead = styled.h2`margin:0`;
const Head = styled.h3`
  margin: 0;
  font-size: ${p=>p.selected?'40px':'30px'};
  white-space: nowrap;
`;
const Desc = styled.p`
  margin: 0;

  ::after {
    content: ' ';
    clear: both;
    display: block;
  }
`

const ToolDesc = styled(ContentBlock)`
  display: ${p=>p.show?'block':'none'};
  width: 200px;
  text-transform: none;
  margin-top: 36px;
  padding-right: 30px;
  margin-bottom: 70px;

  @media(max-width: 700px) {
    display: none;
  }
`;

function ToolTypeAll(props) {

  const {label, filter} = props.params;
  const isSelected = (type)=> label === type && filter === 'type';

  return (
    <LanguageThemeProvider>
      <Container {...props}>
        <Viewport>
          <Row>
            <ToolType to={'/'} selected={label === undefined}>
              <Head selected={label === undefined}><TranslatableStaticText {...staticText.allHead} /></Head>
            </ToolType>
            <ToolType to={'/type/story'} selected={isSelected('story')}>
              <Head selected={isSelected('story')}><TranslatableStaticText {...staticText.storyHead} /></Head>
              <Isvg src={StoryIcon} />
              <ToolDesc show={isSelected('story')}>
                <TranslatableStaticText {...staticText.storyDesc}/>
              </ToolDesc>
            </ToolType>
            <ToolType to={'/type/tactic'} selected={isSelected('tactic')}>
              <Head selected={isSelected('tactic')}><TranslatableStaticText {...staticText.tacticHead} /></Head>
              <Isvg src={TacticIcon} />
              <ToolDesc show={isSelected('tactic')}>
                <TranslatableStaticText {...staticText.tacticDesc} />
              </ToolDesc>
            </ToolType>

            <ToolType to={'/type/principle'} selected={isSelected('principle')}>
              <Head selected={isSelected('principle')}><TranslatableStaticText {...staticText.principleHead} /></Head>
              <Isvg src={PrincipleIcon} />
              <ToolDesc  show={isSelected('principle')}>
                <TranslatableStaticText {...staticText.principleDesc}/>
              </ToolDesc>
            </ToolType>

            <ToolType to={'/type/theory'} selected={isSelected('theory')}>
              <Head selected={isSelected('theory')}><TranslatableStaticText {...staticText.theoryHead} /></Head>
              <Isvg src={TheoryIcon} />
              <ToolDesc show={isSelected('theory')}>
                <TranslatableStaticText {...staticText.theoryDesc}/>
              </ToolDesc>
            </ToolType>

            <ToolType to={'/type/methodology'} selected={isSelected('methodology')}>
              <Head selected={isSelected('methodology')}><TranslatableStaticText {...staticText.methodologyHead} /></Head>
              <Isvg src={MethodologyIcon} />
              <ToolDesc show={isSelected('methodology')}>
                <TranslatableStaticText {...staticText.methodologyDesc}/>
              </ToolDesc>
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
