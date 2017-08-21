import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import Markdown from 'react-remarkable';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import TranslatableStaticText from 'containers/TranslatableStaticText';
import {ByLine as ByLineContainer, ContentContainer} from 'components/ToolPage/Main';
import staticText from '../staticText';

function ByLine(props) {
  return (
    <ByLineContainer>
      <LanguageThemeProvider>
        <ContentBlock>
          <TranslatableStaticText {...staticText.byLine} values={{byline: props.byline}}/>
        </ContentBlock>
      </LanguageThemeProvider>
    </ByLineContainer>
  )
}

export default ByLine;
