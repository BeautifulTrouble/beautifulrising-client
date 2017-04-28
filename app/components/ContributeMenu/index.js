/**
*
* ContributeMenu
*
*/

import React from 'react';
// import styled from 'styled-components';

import Link from 'components/Link';
import MenuBlock from 'components/MenuBlock';
import MenuList from 'components/MenuList';
import MenuListItem from 'components/MenuListItem';
import MenuTitle from 'components/MenuTitle';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ContributeMenu() {
  return (
    <MenuBlock>
      <MenuTitle>Contribute</MenuTitle>
      <MenuList>
        <MenuListItem>
            <Link to="/contribute/how-it-works">How does it work?</Link>
          </MenuListItem>
        </MenuList>
      </MenuBlock>
  );
}

ContributeMenu.propTypes = {

};

export default ContributeMenu;
