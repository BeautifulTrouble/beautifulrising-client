/**
*
* Header
*
*/

import React from 'react';
// import Link from 'components/Link';
import Menu from 'components/Menu';
import TypeMenu from 'components/TypeMenu';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Title = styled.h1``;
const PageHeader = styled.header`
  position: fixed;
  width: 100%;
  background-color: white;
  height: 150px;
  overflow: scroll;
  border: 1px solid black;
  padding: 20px;
`;

function Header() {
  return (
    <PageHeader>
      <Title>
        <FormattedMessage {...messages.header} />
      </Title>
      <Menu />
      <TypeMenu />
    </PageHeader>
  );
}

Header.propTypes = {

};

export default Header;
