import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import Markdown from 'react-remarkable';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import {Epigraph as EpigraphContainer, ContentContainer} from 'components/ToolPage/Main';

function Epigraph(props) {
  const { locale } = props.intl;
  const content = props.epigraphs ?
                  props.epigraphs.map(item => {
                    const text = item.replace(/—/g, '\r\n\r\n––');

                    return (
                      <EpigraphContainer key={text} ar={locale === 'ar'}>
                        <Markdown source={text}/>
                      </EpigraphContainer>
                    );
                  }) :
                  null;

  return (
    <ContentContainer>
      <LanguageThemeProvider>
        <ContentBlock>
          {content}
        </ContentBlock>
      </LanguageThemeProvider>
    </ContentContainer>
  )
}

export default injectIntl(Epigraph);
