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
import LogoImageEn from 'assets/images/logo-en.png';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Title = styled.h1`
  position: absolute;
  top: 10px;
  left: 50%;
  margin: 0;
  transform: translate(-540px, 0);
`;
const Viewport = styled.div`
  position: relative;
`;
const PageHeader = styled.header`
  position: fixed;
  width: 100%;
  background-color: white;
  height: 150px;
  overflow: scroll;
  border: 1px solid black;
  padding: 20px;
  z-index: 200;
`;

function Header() {
  return (
    <PageHeader>
      <Viewport>
        <Title>
          <Link to='/'><img src={LogoImageEn} /></Link>
        </Title>
        <ModalMenu />
      </Viewport>
    </PageHeader>
  );
}

Header.propTypes = {

};

export default Header;
