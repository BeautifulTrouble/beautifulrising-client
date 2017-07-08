/**
*
* ToolHowToUse
*
*/

import React from 'react';
import styled from 'styled-components';

import ContentBlock from 'components/ContentBlock';
import { FormattedMessage, injectIntl } from 'react-intl';
import { CommonLeftHeader } from 'components/CommonComponents';
import { RouterLink } from 'utils/markdown';
import Markdown from 'react-markdown';
import messages from './messages';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

const Header = styled(CommonLeftHeader)`
  border: none;
  margin-top: 40px;
`;
const Content = styled.div`
  img { width: 100%; }
  li { margin-bottom: 20px; }
`;

function ToolHowToUse(props) {
  if (!props.text) return null;

  const lang = props.intl.locale;
  return (
    <LanguageThemeProvider>
      <Header>
        <FormattedMessage {...messages.header} />
      </Header>
      <Content lang={lang}>
        <ContentBlock>
          <Markdown
              source={props.text.replace(/\(([^()]*?)\.jpg\)/g,"(https://www.beautifulrising.org/$1.jpg)")}
              renderers={{Link: RouterLink}}
          />
        </ContentBlock>
      </Content>
    </LanguageThemeProvider>
  );
}

ToolHowToUse.propTypes = {

};

export default injectIntl(ToolHowToUse);
