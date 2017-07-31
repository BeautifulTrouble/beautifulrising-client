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
import {MODULE_TYPE_UNTRANSLATED} from 'components/CommonComponents/constants';

import staticText from '../staticText';

function Untranslated(props) { // eslint-disable-line react/prefer-stateless-function

  const { buildMessage } = props.translatable;
  const origLink = `/${props.lang}/tool/${props.slug}`;
  const message = buildMessage(staticText.translationNeeded, {
    link: origLink,
    form: buildMessage(staticText.needsTranslationForm)
  })

  if (props['module-type-effective'] !== MODULE_TYPE_UNTRANSLATED) return null;

  return (
    <ContentContainer>
      <LanguageThemeProvider>
        <ContentBlock>
          <Markdown
            source={message}
          />
        </ContentBlock>
      </LanguageThemeProvider>
    </ContentContainer>
  );
}

export default injectStaticText(Untranslated);
