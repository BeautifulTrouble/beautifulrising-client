/**
*
* ToolHowToUse
*
*/

import React from 'react';
import styled from 'styled-components';


import { injectIntl } from 'react-intl';
import { RouterLink } from 'utils/markdown';
import Markdown from 'react-markdown';

import TranslatableStaticText from 'containers/TranslatableStaticText';

import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import Header from 'components/ToolHowToUse/Header';
import Content from 'components/ToolHowToUse/Content';

import staticText from './staticText';

function ToolHowToUse(props) {
  if (!props.text) return null;
  if (!props.show) return null;

  const lang = props.intl.locale;
  return (
    <LanguageThemeProvider>
      <Header>
        <TranslatableStaticText {...staticText.header} />
      </Header>
      <Content lang={lang}>
        <ContentBlock>
          <Markdown
              source={props.text.replace(/\(([^()]*?)\.(jpg|png)\)/g,"(https://www.beautifulrising.org/$1.$2)")}
              renderers={{Link: RouterLink}}
          />
        </ContentBlock>
      </Content>
    </LanguageThemeProvider>
  );
}

ToolHowToUse.propTypes = {

};

export default injectIntl(ToolHowToUse);
