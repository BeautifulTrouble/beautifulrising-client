import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Markdown from 'react-markdown';
import { injectIntl } from 'react-intl';

import { RouterLink } from 'utils/markdown';

import TranslatableStaticText, { injectStaticText } from 'containers/TranslatableStaticText';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import {Header, SidebarContent} from 'components/ToolPage/Sidebar';

import staticText from '../staticText';

class Training extends React.PureComponent {
  constructor(props) {
    super();
  }

  render() {
    const lang = this.props.intl.locale;
    const {buildMessage} = this.props.translatable;
    const formLink = buildMessage(staticText.trainingForm);
    const requestMarkdown = buildMessage(staticText.trainingRequest, {form: formLink});
    console.log(requestMarkdown);
    return (
      <LanguageThemeProvider>
        <SidebarContent>
          <Header>
            <TranslatableStaticText {...staticText.trainingHeader} />
          </Header>
          <ContentBlock>
            <Markdown
              source={requestMarkdown}
              renderers={{Link: RouterLink}}
            />
          </ContentBlock>
        </SidebarContent>
      </LanguageThemeProvider>
    );
  }
}

export default injectStaticText(injectIntl(Training));
