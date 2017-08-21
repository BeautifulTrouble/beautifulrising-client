import React from 'react';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import Markdown from 'react-remarkable';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import {ContentContainer} from 'components/ToolPage/Main';
import { injectStaticText } from 'containers/TranslatableStaticText';
import staticText from '../staticText';

const OriginsContent = styled(ContentBlock)`

`;

function Origins(props) {
  const { locale } = props.intl;
  const { buildMessage } = props.translatable;

  const originsText = buildMessage(staticText.origins);

  return (
    <ContentContainer>
      <LanguageThemeProvider>
        <OriginsContent>
          <Markdown source={`**${originsText}:** *${props.origins}*`}/>
        </OriginsContent>
      </LanguageThemeProvider>
    </ContentContainer>
  )
}

export default injectStaticText(injectIntl(Origins));
