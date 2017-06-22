/**
*
* ToolTextSection
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage, injectIntl } from 'react-intl';
import { CommonLeftHeader } from 'components/CommonComponents';
import Markdown from 'react-remarkable';
import messages from './messages';

const Header = styled(CommonLeftHeader)`
  border: none;
  text-align: ${props=>props.lang==='ar' ? 'right' : 'left'};
  margin-top: 40px;

  font-size: 19px;
  line-height: 22px;
  font-family: 'Avenir Black', 'Kaff Bold', sans-serif;
`;
const Content = styled.div`
  text-align: ${props=>props.lang==='ar' ? 'right' : 'left'};
  font-size: 14px;
  line-height: 22px

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
      <Header lang={props.intl.locale}>
        <FormattedMessage {...messages.header} />
      </Header>
      <Content lang={props.intl.locale}>
        <Markdown source={props.text.replace(/\(([^()]*?)\.jpg\)/g,"(https://www.beautifulrising.org/$1.jpg)")} />
      </Content>
    </div>
  );
}

ToolTextSection.propTypes = {

};

export default injectIntl(ToolTextSection);
