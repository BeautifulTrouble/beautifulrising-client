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

function TrainingMenu(props) {
  return (
    <MenuBlock>
      <MenuTitle><FormattedMessage {...messages.header} /></MenuTitle>
      <MenuList>
        <MenuListItem>
          <Link to="/resources/training" onClick={props.onClick}>
            <FormattedMessage {...messages.requestTraining} />
          </Link>
        </MenuListItem>
        <MenuListItem>
          <Link to="/resources/other" onClick={props.onClick}>
            <FormattedMessage {...messages.otherResources} />
          </Link>
        </MenuListItem>
      </MenuList>
    </MenuBlock>
  );
}

TrainingMenu.propTypes = {

};

export default TrainingMenu;
