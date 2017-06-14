/**
*
* ContributeMenu
*
*/

import React from 'react';
// import styled from 'styled-components';

import MenuLink from 'components/MenuLink';
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
          <MenuLink to="/contribute/how-it-works" onClick={props.onClick}>
            <FormattedMessage {...messages.howItWorks} />
          </MenuLink>
        </MenuListItem>
      </MenuList>
    </MenuBlock>
  );
}

ContributeMenu.propTypes = {

};

export default ContributeMenu;
