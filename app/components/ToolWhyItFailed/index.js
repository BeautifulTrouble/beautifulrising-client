/**
*
* ToolTextSection
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { CommonLeftHeader } from 'components/CommonComponents';
import Markdown from 'react-remarkable';
import messages from './messages';

const Header = styled(CommonLeftHeader)`
  border: none;
  text-align: left;
  margin-top: 40px;

  font-size: 19px;
  line-height: 22px;
  font-family: 'Avenir Black', 'Kaff Bold', sans-serif;
`;
const Content = styled.div`
  text-align: left;
  font-size: 14px;

  img {
    width: 100%;
  }
  li {
    margin-bottom: 20px;
  }
`;

function ToolTextSection(props) {
  if (!props.text) return null;

  return (
    <div>
      <Header>
        <FormattedMessage {...messages.header} />
      </Header>
      <Content>
        <Markdown source={props.text.replace(/\(([^()]*?)\.jpg\)/g,"(https://www.beautifulrising.org/$1.jpg)")} />
      </Content>
    </div>
  );
}

ToolTextSection.propTypes = {

};

export default ToolTextSection;
