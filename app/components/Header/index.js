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
  background-color: white;
  top: 0px;
  left: 100px;
  margin: 0;
`;
const Viewport = styled.div`
  position: relative;
  width: 1110px;
  text-align: left;
  display: inline-block;
`;
const PageHeader = styled.header`
  position: fixed;
  width: 100%;
  background-color: white;
  height: 90px;
  overflow: visible;
  padding: 0 20px 0px;
  z-index: 200;
  text-align: center;

`;

const ModalMenuArea = styled(ModalMenu)`
  .ReactModalPortal {
    color: blue;
  }
  .ReactModal__Overlay ReactModal__Overlay--after-open {
    z-index: 600;
    background-color: rgba(255,255,255,0.5);
  }
`;

function Header() {
  return (
    <PageHeader>
      <Viewport>
        <Title>
          <Link to='/'><img src={LogoImageEn} /></Link>
        </Title>
        <ModalMenuArea />
      </Viewport>
    </PageHeader>
  );
}

Header.propTypes = {

};

export default Header;
