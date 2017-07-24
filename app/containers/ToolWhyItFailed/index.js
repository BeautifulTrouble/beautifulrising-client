/**
*
* ToolTextSection
*
*/

import React from 'react';
import styled from 'styled-components';
import Markdown from 'react-markdown';
import { injectIntl} from 'react-intl';

import {RouterLink} from 'utils/markdown';

import TranslatableStaticText from 'containers/TranslatableStaticText';

import CommonLeftHeader from 'components/CommonComponents/CommonLeftHeader';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import Header from 'components/ToolWhyItFailed/Header';
import Content from 'components/ToolWhyItFailed/Content';

import messages from './messages';
import staticText from './staticText';


function ToolWhyItFailed(props) {
  if (!props.text) return null;
  if (!props.show) return null;

  return (
    <LanguageThemeProvider>
      <Header lang={props.intl.locale}>
        <TranslatableStaticText {...staticText.header} />
      </Header>
      <Content lang={props.intl.locale}>
        <Markdown
            source={props.text.replace(/\(([^()]*?)\.jpg\)/g,"(https://www.beautifulrising.org/$1.jpg)")}
            renderers={{Link: RouterLink}}
        />
      </Content>
    </LanguageThemeProvider>
  );
}

ToolWhyItFailed.propTypes = {

};

export default injectIntl(ToolWhyItFailed);
