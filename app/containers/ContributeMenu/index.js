/**
*
* ContributeMenu
*
*/

import React from 'react';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import MenuLink from 'components/MenuLink';
import MenuBlock from 'components/MenuBlock';
import MenuList from 'components/MenuList';
import MenuListItem from 'components/MenuListItem';
import MenuTitle from 'components/MenuTitle';
import { KEY_CONTRIBUTE_HEADER, KEY_HOW_DOES_IT_WORK} from './constants';

function ContributeMenu(props) {
  return (
    <LanguageThemeProvider>
      <MenuBlock>
        <MenuTitle>
          <TranslatableStaticText id={KEY_CONTRIBUTE_HEADER} />
        </MenuTitle>
        <MenuList>
          <MenuListItem>
            <MenuLink to="/contribute/how-it-works" onClick={props.onClick}>
              <TranslatableStaticText id={KEY_HOW_DOES_IT_WORK} />
            </MenuLink>
          </MenuListItem>
        </MenuList>
      </MenuBlock>
    </LanguageThemeProvider>
  );
}

ContributeMenu.propTypes = {

};

export default ContributeMenu;
