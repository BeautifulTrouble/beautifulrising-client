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

import Markdown from 'react-remarkable';
import messages from './messages';

const Container = styled.div`
  text-align: ${props=>props.theme.lang === 'ar' ? 'right' : 'left'};
`;
const Viewport = styled.div``;
const Header = styled.h3`
  font-size: 40px;
  text-transform: uppercase
  margin: 0;
  * {
    vertical-align: middle;
    display: inline-block;
  }
  border-bottom: 4px solid;
  padding-bottom: 5px;
`;
const Content = styled.div`
  font-size: 14px;
  line-height: 22px;
`;

function ToolsPotentialRisk(props) {
  if (!props.content || props.content.trim().length == 0) return null;
  return (
    <ThemeProvider theme={{ lang: props.intl.locale }}>
      <Container>
        <Viewport>
          <Header>
            <PotentialRiskIcon src={PotentialRiskIconImage} type={props.type} />
            <FormattedMessage {...messages.potentialRiskHeader} />
          </Header>
          <Content>
            <Markdown source={props.content} />
          </Content>
        </Viewport>
      </Container>
    </ThemeProvider>
  );
}

ToolsPotentialRisk.propTypes = {
  content: React.PropTypes.string,
  type: React.PropTypes.string.isRequired
};

export default injectIntl(ToolsPotentialRisk);
