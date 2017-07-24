/*
 *
 * ToolPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Markdown from 'react-markdown';
import styled from 'styled-components';

import { RouterLink } from 'utils/markdown';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import AdderRemover from 'containers/Tools/AdderRemover';
import { LearnMoreList, ToolMainContent, ToolMainContentHeader } from 'components/ToolsPageComponents';
import ToolLearnMoreItem from './ToolLearnMoreItem';
import {MODULE_TYPE_UNTRANSLATED} from 'components/CommonComponents/constants';
// import { makeSelectToolById } from 'containers/Tool/selectors';

import messages from './messages';
const ToolUntranslatedContainer = styled.div`
  border-bottom: 2px solid black;
  margin-bottom: 10px;
`;

function ToolUntranslated(props) { // eslint-disable-line react/prefer-stateless-function

  const { formatMessage } = props.intl;
  const origLink = `/${props.lang}/tool/${props.slug}`;
  const message = formatMessage(messages.translationNeeded, {
    link: origLink,
    form: formatMessage(messages.needsTranslationForm)
  })

  if (props['module-type-effective'] !== MODULE_TYPE_UNTRANSLATED) return null;

  return (
    <ToolUntranslatedContainer>
      <LanguageThemeProvider>
        <ToolMainContent>
          <Markdown
            source={message}
          />
        </ToolMainContent>
      </LanguageThemeProvider>
    </ToolUntranslatedContainer>
  );
}

export default injectIntl(ToolUntranslated);
