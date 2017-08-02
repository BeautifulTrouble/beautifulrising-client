/**
*
* ToolTypeAllFull
*
*/

import React from 'react';
import styled from 'styled-components';
import Isvg from 'react-inlinesvg';

import {Link} from 'react-router';
import { injectIntl } from 'react-intl';

import TranslatableStaticText from 'containers/TranslatableStaticText';

import Container from 'components/ToolTypeAllFull/Container';
import Desc from 'components/ToolTypeAllFull/Desc';
import Head from 'components/ToolTypeAllFull/Head';
import Row from 'components/ToolTypeAllFull/Row';
import ToolType from 'components/ToolTypeAllFull/ToolType';

import MethodologyIcon from 'assets/images/type/methodologies-option.svg';
import PrincipleIcon from 'assets/images/type/principles-option.svg';
import StoryIcon from 'assets/images/type/stories-option.svg';
import TacticIcon from 'assets/images/type/tactics-option.svg';
import TheoryIcon from 'assets/images/type/theories-option.svg';

import messages from '../ToolTypeArea/messages';
import staticText from './staticText';

function ToolTypeAllFull(props) {
  const lang = props.intl.locale;
  return (
    <Container {...props} lang={lang} showLine={props.showLine}>
      <div>
        <Row>
            <ToolType to={'/type/story'} lang={lang}>
              <Head ar={lang==='ar'}>
                <TranslatableStaticText {...staticText.stories} />
              </Head>
              <Isvg src={StoryIcon} />
            </ToolType>

            <ToolType to={'/type/story'} style={{paddingTop: 35}} lang={lang}>
              <Desc ar={lang==='ar'}>
                <TranslatableStaticText {...staticText.shortDefinitionStory} />
              </Desc>
            </ToolType>
        </Row>


        <Row>
            <ToolType to={'/type/tactic'} lang={lang}>
              <Head ar={lang==='ar'}>
                <TranslatableStaticText {...staticText.tactics} />
              </Head>
              <Isvg src={TacticIcon} />
            </ToolType>

            <ToolType to={'/type/tactic'} style={{paddingTop: 35}} lang={lang}>
              <Desc ar={lang==='ar'}>
                <TranslatableStaticText {...staticText.shortDefinitionTactic} />
              </Desc>
            </ToolType>
        </Row>


        <Row>
            <ToolType to={'/type/principle'} lang={lang}>
              <Head ar={lang==='ar'}>
                <TranslatableStaticText {...staticText.principles} />
              </Head>
              <Isvg src={PrincipleIcon} />
            </ToolType>

            <ToolType to={'/type/principle'} style={{paddingTop: 35}} lang={lang}>
              <Desc ar={lang==='ar'}>
                <TranslatableStaticText {...staticText.shortDefinitionPrinciple} />
              </Desc>
            </ToolType>
        </Row>


        <Row>
            <ToolType to={'/type/theory'} lang={lang}>
              <Head ar={lang==='ar'}>
                <TranslatableStaticText {...staticText.theories} />
              </Head>
              <Isvg src={TheoryIcon} />
            </ToolType>

            <ToolType to={'/type/theory'} style={{paddingTop: 35}} lang={lang}>
              <Desc ar={lang==='ar'}>
                <TranslatableStaticText {...staticText.shortDefinitionTheory} />
              </Desc>
            </ToolType>
        </Row>
        <Row>
            <ToolType to={'/type/methodology'} lang={lang}>
              <Head ar={lang==='ar'}>
                <TranslatableStaticText {...staticText.methodologies} />
              </Head>
              <Isvg src={MethodologyIcon} />
            </ToolType>

            <ToolType to={'/type/methodology'} style={{paddingTop: 35}} lang={lang}>
              <Desc ar={lang==='ar'}>
                <TranslatableStaticText {...staticText.shortDefinitionMethodology} />
              </Desc>
            </ToolType>
        </Row>
        <Row>
            <ToolType to={'/type/story'} lang={lang}>
              <Head ar={lang==='ar'}>
                <TranslatableStaticText {...staticText.stories} />
              </Head>
              <Isvg src={StoryIcon} />
            </ToolType>

            <ToolType to={'/type/story'} style={{paddingTop: 35}} lang={lang}>
              <Desc ar={lang==='ar'}>
                <TranslatableStaticText {...staticText.shortDefinitionStory} />
              </Desc>
            </ToolType>
        </Row>
      </div>
    </Container>
  );
}

/**
<Row>
  <ToolType to={'/type/tactic'} lang={lang}>
    <Head ar={lang==='ar'}>
      <TranslatableStaticText {...staticText.tactics} />
    </Head>
    <Isvg src={TacticIcon} />
    <Desc ar={lang==='ar'}>
      <TranslatableStaticText {...staticText.shortDefinitionTactic} />
    </Desc>
  </ToolType>

  <ToolType to={'/type/principle'} lang={lang}>
    <Head ar={lang==='ar'}>
      <TranslatableStaticText {...staticText.principles} />
    </Head>
    <Isvg src={PrincipleIcon} />
    <Desc ar={lang==='ar'}>
      <TranslatableStaticText {...staticText.shortDefinitionPrinciple} />
    </Desc>
  </ToolType>

  <ToolType to={'/type/theory'} lang={lang}>
    <Head ar={lang==='ar'}>
      <TranslatableStaticText {...staticText.theories} />
    </Head>
    <Isvg src={TheoryIcon} />
    <Desc ar={lang==='ar'}>
      <TranslatableStaticText {...staticText.shortDefinitionTheory} />
    </Desc>
  </ToolType>

  <ToolType to={'/type/methodology'} lang={lang}>
    <Head ar={lang==='ar'}>
      <TranslatableStaticText {...staticText.methodologies} />
    </Head>
    <Isvg src={MethodologyIcon} />
    <Desc ar={lang==='ar'}>
      <TranslatableStaticText {...staticText.shortDefinitionMethodology} />
    </Desc>
  </ToolType>
</Row>*/

ToolTypeAllFull.propTypes = {

};

export default injectIntl(ToolTypeAllFull);
