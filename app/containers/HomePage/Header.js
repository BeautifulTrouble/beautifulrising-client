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
import ToolTypeArea from 'components/ToolTypeArea';
import SearchField from 'containers/SearchField';

const HeaderContainer = styled.div`
  width: 1080px;
  position: fixed;
  background-color: white;
  z-index: 200;
  top: 92px;
`;

function Header(props) {
  // console.log(props.params);
  return (
    <HeaderContainer>
      <SearchField {...props.params}/>
      <ToolTypeArea {...props.params} />
    </HeaderContainer>
  );
}

Header.propTypes = {

};

export default Header;
