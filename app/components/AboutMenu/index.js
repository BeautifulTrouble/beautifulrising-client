/**
*
* AboutMenu
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

function AboutMenu() {
  return (
    <MenuBlock>
      <MenuTitle>About</MenuTitle>
      <MenuList>
        <MenuListItem>
          <Link to="/about/whats-inside">The Toolbox</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/about/process">Our Process</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/about/values">Our Values</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/about/advisory-network">Our Advisory Network</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/about/team">Our Team</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/about/beautiful-trouble-and-action-aid">Beautiful Trouble + AA</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/about/partners">Partners</Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/about/faq">FAQ</Link>
        </MenuListItem>
      </MenuList>
    </MenuBlock>
  );
}

AboutMenu.propTypes = {

};

export default AboutMenu;
