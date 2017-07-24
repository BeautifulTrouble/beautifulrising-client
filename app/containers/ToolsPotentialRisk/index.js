/**
*
* ToolsPotentialRisk
*
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Markdown from 'react-markdown';
import { injectIntl } from 'react-intl';

import { RouterLink } from 'utils/markdown';

import TranslatableStaticText from 'containers/TranslatableStaticText';

import { PotentialRiskIcon } from 'components/ToolsComponents';
import PotentialRiskIconImage from 'assets/images/icons/potential-risk.svg';

import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import Container from 'components/ToolsPotentialRisk/Container';
import HeaderName from 'components/ToolsPotentialRisk/HeaderName';
import Header from 'components/ToolsPotentialRisk/Header';

import messages from './messages';
import staticText from './staticText';

function ToolsPotentialRisk(props) {
  if (!props.content || props.content.trim().length == 0) return null;
  const lang = props.intl.locale;
  return (
    <LanguageThemeProvider>
      <Container>
        <div>
          <Header >
            <PotentialRiskIcon src={PotentialRiskIconImage} lang={lang} type={props.type} />
            <HeaderName>
              <TranslatableStaticText {...staticText.potentialRiskHeader} />
            </HeaderName>
          </Header>
          <ContentBlock>
            <Markdown source={props.content} renderers={{Link: RouterLink}} />
          </ContentBlock>
        </div>
      </Container>
    </LanguageThemeProvider>
  );
}

ToolsPotentialRisk.propTypes = {
  content: React.PropTypes.string,
  type: React.PropTypes.string.isRequired
};

export default injectIntl(ToolsPotentialRisk);
