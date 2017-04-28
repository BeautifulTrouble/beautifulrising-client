/**
*
* Header
*
*/

import React from 'react';
import Link from 'components/Link';
import Menu from 'components/Menu';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const Ul = styled.ul`
  padding: 0;
  margin: 0;
`;
const Li = styled.li`
  display: inline-block;
  margin: 2px;
`;

function Header() {
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <Menu />
    </div>
  );
}

Header.propTypes = {

};

export default Header;
