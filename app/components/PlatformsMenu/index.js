/**
*
* PlatformsMenu
*
*/

import React from 'react';
// import styled from 'styled-components';

import Link from 'components/Link';
import MenuBlock from 'components/MenuBlock';
import MenuList from 'components/MenuList';
import MenuListItem from 'components/MenuListItem';
import MenuTitle from 'components/MenuTitle';
import MenuSubtitle from 'components/MenuSubtitle';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function PlatformsMenu(props) {
  return (
    <MenuBlock>
      <MenuTitle><FormattedMessage {...messages.header} /></MenuTitle>
      <MenuSubtitle>
        <FormattedMessage {...messages.subheader} />
      </MenuSubtitle>
      <MenuList>
        <MenuListItem>
          <Link to="/platforms/chatbot" onClick={props.onClick}>
            <FormattedMessage {...messages.chatbot} />
          </Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/platforms/game" onClick={props.onClick}>
            <FormattedMessage {...messages.game} />
          </Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/platforms/pdf" onClick={props.onClick}>
            <FormattedMessage {...messages.pdf} />
          </Link>
        </MenuListItem>
      </MenuList>
    </MenuBlock>
  );
}

PlatformsMenu.propTypes = {

};

export default PlatformsMenu;
