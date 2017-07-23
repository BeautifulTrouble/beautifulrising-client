/**
*
* ToolTextSection
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage, injectIntl } from 'react-intl';
import CommonLeftHeader from 'components/CommonComponents/CommonLeftHeader';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

import { RouterLink } from 'utils/markdown';
import Markdown from 'react-markdown';
import messages from './messages';

const Header = styled(CommonLeftHeader)`
  border: none;
  text-align: ${p=>p.theme.isArabic ? 'right' : 'left'};
  margin-top: 40px;

`;
const Content = styled(ContentBlock)`
  img {
    width: 100%;
  }
  li {
    margin-bottom: 20px;
  }
`;

function ToolWhyItWorked(props) {

  if (props.text === undefined || props.text.length == 0) return null;

  if (!props.show) return null;

  return (
    <LanguageThemeProvider>
      <Header lang={props.intl.locale}>
        <FormattedMessage {...messages.header} />
      </Header>
      <Content>
        <Markdown
          source={props.text.replace(/\(([^()]*?)\.jpg\)/g,"(https://www.beautifulrising.org/$1.jpg)")}
          renderers={{Link: RouterLink}}
        />
      </Content>
    </LanguageThemeProvider>
  );
}

ToolWhyItWorked.propTypes = {

};

export default injectIntl(ToolWhyItWorked);
