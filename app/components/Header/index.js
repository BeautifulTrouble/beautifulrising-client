/**
*
* Header
*
*/

import React from 'react';
import Link from 'components/Link';
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
      <ul>
        <Li>
          <Link to="/">
            <FormattedMessage {...messages.homeLink} />
          </Link>
        </Li>
        <Li>
          <Link to="/about">
            <FormattedMessage {...messages.aboutLink} />
          </Link>
        </Li>
      </ul>
    </div>
  );
}

Header.propTypes = {

};

export default Header;
