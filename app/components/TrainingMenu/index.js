/**
*
* TrainingMenu
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

function TrainingMenu() {
  return (
    <MenuBlock>
      <MenuTitle>Training + Resources</MenuTitle>
      <MenuList>
        <MenuListItem>
          <Link to="/resources/training">Request a Training</Link>
         </MenuListItem>
         <MenuListItem>
           <Link to="/resources/other">Other Resources</Link>
          </MenuListItem>
        </MenuList>
      </MenuBlock>
  );
}

TrainingMenu.propTypes = {

};

export default TrainingMenu;
