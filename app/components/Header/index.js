/**
*
* Header
*
*/

import React from 'react';
import Link from 'components/Link';
import Menu from 'components/Menu';
import TypeMenu from 'components/TypeMenu';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Header() {
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <Menu />
      <TypeMenu />
    </div>
  );
}

Header.propTypes = {

};

export default Header;
