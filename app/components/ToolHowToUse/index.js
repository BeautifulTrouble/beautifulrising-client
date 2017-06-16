/**
*
* ToolHowToUse
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
  font-family: 'Avenir Black', sans-serif;
  font-size: 19px;
  letter-spacing: 0;
  line-height: 22px;
`;
const Content = styled.div`
  text-align: left;
  font-size: 14px;
  line-height: 22px;

  a {
    color: #828486;
  }
  img {
    width: 100%;
  }
  li {
    margin-bottom: 20px;
  }
`;

function ToolHowToUse(props) {
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

ToolHowToUse.propTypes = {

};

export default ToolHowToUse;
