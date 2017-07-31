import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Markdown from 'react-markdown';
import { injectIntl } from 'react-intl';

import { RouterLink } from 'utils/markdown';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import {Header, SidebarContent} from 'components/ToolPage/Sidebar';

import staticText from '../staticText';

class RelatedTools extends React.PureComponent {
  constructor(props) {
    super();
  }

  render() {
    if (!props.content || props.content.trim().length == 0) return null;
    const lang = props.intl.locale;
    return (
      <LanguageThemeProvider>
        <SidebarContent>
          <Header>
            <TranslatableStaticText {...staticText.relatedTools} />
          </Header>
          <ContentBlock>
          </ContentBlock>
        </SidebarContent>
      </LanguageThemeProvider>
    );
  }
}

PotentialRisk.propTypes = {
  content: React.PropTypes.string,
  type: React.PropTypes.string.isRequired
};

export default injectIntl(PotentialRisk);
