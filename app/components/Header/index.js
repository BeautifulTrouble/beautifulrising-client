/**
*
* Header
*
*/

import React from 'react';
// import Link from 'components/Link';
import TypeMenu from 'components/TypeMenu';
import styled from 'styled-components';
import ModalMenu from 'components/ModalMenu';
import Link from 'components/Link';

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
  z-index: 100;
`;

function Header() {
  return (
    <PageHeader>
      <Title>
        <Link to='/'><FormattedMessage {...messages.header} /></Link>
      </Title>
      <ModalMenu />
    </PageHeader>
  );
}

Header.propTypes = {

};

export default Header;
