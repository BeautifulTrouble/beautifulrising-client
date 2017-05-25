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

function ContributeMenu(props) {
  return (
    <MenuBlock>
      <MenuTitle><FormattedMessage {...messages.header} /></MenuTitle>
      <MenuList>
        <MenuListItem>
          <Link to="/contribute/how-it-works" onClick={props.onClick}>How does it work?</Link>
        </MenuListItem>
      </MenuList>
    </MenuBlock>
  );
}

ContributeMenu.propTypes = {

};

export default ContributeMenu;
