/**
*
* ToolsRequestTraining
*
*/

import React from 'react';
import styled from 'styled-components';

import { injectIntl } from 'react-intl';
import Markdown from 'react-remarkable';
import messages from './messages';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

function ToolsRequestTraining(props) {
  const {formatMessage} = props.intl;
  return (
    <LanguageThemeProvider>
      <ContentBlock>
        <Markdown source={ formatMessage(
                              messages.requestTraining,
                              { form: formatMessage(messages.trainingForm) }
                            )
                          } />
      </ContentBlock>
    </LanguageThemeProvider>
  );
}

ToolsRequestTraining.propTypes = {};

export default injectIntl(ToolsRequestTraining);
