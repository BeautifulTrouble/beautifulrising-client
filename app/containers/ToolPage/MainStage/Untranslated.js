/*
 *
 * ToolPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Markdown from 'react-markdown';
import styled from 'styled-components';

import { injectStaticText } from 'containers/TranslatableStaticText';
import { ContentContainer } from 'components/ToolPage/Main'
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import { MODULE_TYPE_UNTRANSLATED } from 'components/CommonComponents/constants';

import staticText from '../staticText';


const UntranslatedBlock = styled(ContentBlock)`
  font-weight: bold;
`;

function Untranslated(props) { // eslint-disable-line react/prefer-stateless-function

  const { buildMessage } = props.translatable;
  const origLink = `/en/tool/${props.slug}`;
  const message = buildMessage(staticText.translationNeeded, {
    link: origLink,
    form: buildMessage(staticText.needsTranslationForm)
  })

  if (props.showIfUntranslated('full-write-up')) {
    return null;
  }

  return (
    <ContentContainer>
      <LanguageThemeProvider>
        <UntranslatedBlock>
          <Markdown
            source={message}
          />
        </UntranslatedBlock>
      </LanguageThemeProvider>
    </ContentContainer>
  );
}

export default injectStaticText(Untranslated);
