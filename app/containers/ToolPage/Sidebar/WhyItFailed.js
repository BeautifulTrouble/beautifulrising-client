import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Markdown from 'react-markdown';
import { injectIntl } from 'react-intl';
import Isvg from 'react-inlinesvg';

import { RouterLink } from 'utils/markdown';
import TranslatableStaticText from 'containers/TranslatableStaticText';


import { PotentialRiskIcon } from 'components/ToolsComponents';
import WhyItFailedIcon from 'assets/images/icons/stories-whyitfailed.svg';

import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import { BigHeader,
          SidebarContent,
          RelatedHeader,
          WhyItIcon} from 'components/ToolPage/Sidebar';

import staticText from '../staticText';

function WhyItFailed(props) {
  if (!props.text || props.text.trim().length == 0) return null;
  const lang = props.intl.locale;
  return (
    <LanguageThemeProvider>
      <SidebarContent>
        <BigHeader>
          <WhyItIcon>
            <Isvg src={WhyItFailedIcon}/>
          </WhyItIcon>
          <TranslatableStaticText {...staticText.whyItFailedHeader} />
        </BigHeader>
        <ContentBlock>
          <Markdown source={props.text} renderers={{Link: RouterLink}} />
        </ContentBlock>
      </SidebarContent>
    </LanguageThemeProvider>
  );
}

WhyItFailed.propTypes = {
  content: React.PropTypes.string,
  type: React.PropTypes.string.isRequired
};

export default injectIntl(WhyItFailed);
