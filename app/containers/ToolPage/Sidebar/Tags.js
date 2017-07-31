import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Markdown from 'react-markdown';
import { injectIntl } from 'react-intl';

import { RouterLink } from 'utils/markdown';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import {Header, SidebarContent} from 'components/ToolPage/Sidebar';
import TagsContent from 'containers/Tags';

import staticText from '../staticText';

class Tags extends React.PureComponent {
  constructor(props) {
    super();
  }

  render() {
    const lang = this.props.intl.locale;
    return (
      <LanguageThemeProvider>
        <SidebarContent>
          <Header>
            <TranslatableStaticText {...staticText.tags} />
          </Header>
          <TagsContent
              align={lang == 'ar' ? "right" : "left"}
              tags={this.props.tags ?
                      this.props.tags.map(item=>item.toLowerCase()) : null}
          />
        </SidebarContent>
      </LanguageThemeProvider>
    );
  }
}

Tags.propTypes = {
  content: React.PropTypes.string,
  type: React.PropTypes.string.isRequired
};

export default injectIntl(Tags);
