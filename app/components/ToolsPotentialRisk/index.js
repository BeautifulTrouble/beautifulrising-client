/**
*
* ToolsPotentialRisk
*
*/

import React from 'react';
import styled from 'styled-components';
import PotentialRiskIconImage from 'assets/images/icons/potential-risk.svg';
import { PotentialRiskIcon } from 'components/ToolsComponents';
import { FormattedMessage } from 'react-intl';

import Markdown from 'react-remarkable';
import messages from './messages';

const Container = styled.div`
  text-align: left;
`;
const Viewport = styled.div``;
const Header = styled.h3`
  text-transform: uppercase
  * {
    vertical-align: middle;
    display: inline-block;
  }
`;
const Content = styled.div``;

function ToolsPotentialRisk(props) {
  if (!props.content || props.content.trim().length == 0) return null;
  return (
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
  );
}

ToolsPotentialRisk.propTypes = {
  content: React.PropTypes.string,
  type: React.PropTypes.string.isRequired
};

export default ToolsPotentialRisk;