/**
*
* ToolListItem
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Link from 'components/Link';
import TypeMenu from 'components/TypeMenu';
import SearchField from 'containers/SearchField';

const HeaderContainer = styled.div`
  width: 100%;
`;

function Header(props) {
  return (
    <HeaderContainer>
      <SearchField />
      <TypeMenu />
    </HeaderContainer>
  );
}

Header.propTypes = {

};

export default Header;
