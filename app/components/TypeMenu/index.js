/**
*
* TypeMenu
*
*/

import React from 'react';
import styled from 'styled-components';

import Link from 'components/Link';
import MenuBlock from 'components/MenuBlock';
import MenuList from 'components/MenuList';
import MenuListItem from 'components/MenuListItem';
import MenuTitle from 'components/MenuTitle';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function TypeMenu() {
  return (
    <MenuBlock>
      <MenuList>
        <MenuListItem>
          <Link to="/type/stories">Stories</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/type/tactics">Tactics</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/type/principles">Principles</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/type/theories">Theories</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/type/methodologies">Methodologies</Link>
        </MenuListItem>
      </MenuList>
    </MenuBlock>
  );
}

TypeMenu.propTypes = {

};

export default TypeMenu;
