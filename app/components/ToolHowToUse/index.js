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
import Markdown from 'react-remarkable';
import messages from './messages';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

const Header = styled(CommonLeftHeader)`
  border: none;
  text-align: ${p=>p.lang==='ar'?'right':'left'};
  margin-top: 40px;
  font-weight: 800; font-family: 'Avenir', 'Kaff Bold', sans-serif;
  font-size: 19px;
  letter-spacing: 0;
  line-height: 22px;
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
      <Header lang={lang}>
        <FormattedMessage {...messages.header} />
      </Header>
      <Content lang={lang}>
        <ContentBlock>
          <Markdown source={props.text.replace(/\(([^()]*?)\.jpg\)/g,"(https://www.beautifulrising.org/$1.jpg)")} />
        </ContentBlock>
      </Content>
    </LanguageThemeProvider>
  );
}

ToolHowToUse.propTypes = {

};

export default injectIntl(ToolHowToUse);
