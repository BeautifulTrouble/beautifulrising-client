/**
*
* ToolTextSection
*
*/

import React from 'react';
import { injectIntl } from 'react-intl';
import Markdown from 'react-markdown';

import { RouterLink } from 'utils/markdown';

import TranslatableStaticText from 'containers/TranslatableStaticText';

import LanguageThemeProvider from 'components/LanguageThemeProvider';
import Header from 'components/ToolWhyItWorked/Header';
import Content from 'components/ToolWhyItWorked/Content';

import staticText from './staticText';

function ToolWhyItWorked(props) {

  if (props.text === undefined || props.text.length == 0) return null;

  if (!props.show) return null;

  return (
    <LanguageThemeProvider>
      <Header lang={props.intl.locale}>
        <TranslatableStaticText {...staticText.header} />
      </Header>
      <Content>
        <Markdown
          source={props.text.replace(/\(([^()]*?)\.(jpg|png)\)/g,"(https://www.beautifulrising.org/$1.$2)")}
          renderers={{Link: RouterLink}}
        />
      </Content>
    </LanguageThemeProvider>
  );
}

ToolWhyItWorked.propTypes = {

};

export default injectIntl(ToolWhyItWorked);
