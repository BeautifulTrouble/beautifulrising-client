/**
*
* ToolsPotentialRisk
*
*/

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PotentialRiskIconImage from 'assets/images/icons/potential-risk.svg';
import { PotentialRiskIcon } from 'components/ToolsComponents';
import { FormattedMessage, injectIntl } from 'react-intl';

import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

import Markdown from 'react-remarkable';
import messages from './messages';

const Container = styled.div`
  text-align: ${props=>props.theme.lang === 'ar' ? 'right' : 'left'};
`;
const Viewport = styled.div``;
const HeaderName = styled.span`
  margin-top: ${p=>p.theme.lang==='ar'?'-4px':'0'};
`;
const Header = styled.h3`
  font-size: ${p=>p.theme.lang==='ar'?'30px':'40px'};
  text-transform: uppercase;
  position: relative;
  margin: 0;
  padding-${p=>p.theme.lang==='ar'?'right':'left'}: 46px;
  .isvg.loaded {
    position: absolute;
    top: ${p=>p.theme.lang==='ar'?'0':'6px'};
    ${p=>p.theme.lang==='ar'?'right':'left'}: 0;
  }
  * {
    line-height: 1;
    vertical-align: middle;
    display: inline-block;
  }
  border-bottom: 5px solid;
  padding-bottom: 0;
`;

function ToolsPotentialRisk(props) {
  if (!props.content || props.content.trim().length == 0) return null;
  const lang = props.intl.locale;
  return (
    <LanguageThemeProvider>
      <Container>
        <Viewport>
          <Header >
            <PotentialRiskIcon src={PotentialRiskIconImage} lang={lang} type={props.type} />
            <HeaderName><FormattedMessage {...messages.potentialRiskHeader} /></HeaderName>
          </Header>
          <ContentBlock>
            <Markdown source={props.content} />
          </ContentBlock>
        </Viewport>
      </Container>
    </LanguageThemeProvider>
  );
}

ToolsPotentialRisk.propTypes = {
  content: React.PropTypes.string,
  type: React.PropTypes.string.isRequired
};

export default injectIntl(ToolsPotentialRisk);
