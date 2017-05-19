/**
*
* AboutMenu
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

function AboutMenu(props) {
  return (
    <MenuBlock>
      <MenuTitle><FormattedMessage {...messages.header} /></MenuTitle>
      <MenuList>
        <MenuListItem>
          <Link to="/about/whats-inside"  onClick={props.onClick}>The Toolbox</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/about/process" onClick={props.onClick}>Our Process</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/about/values" onClick={props.onClick}>Our Values</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/about/advisory-network" onClick={props.onClick}>Our Advisory Network</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/about/team" onClick={props.onClick}>Our Team</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/about/beautiful-trouble-and-action-aid" onClick={props.onClick}>Beautiful Trouble + AA</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/about/partners" onClick={props.onClick}>Partners</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/about/faq" onClick={props.onClick}>FAQ</Link>
        </MenuListItem>
      </MenuList>
    </MenuBlock>
  );
}

export default AboutMenu;
