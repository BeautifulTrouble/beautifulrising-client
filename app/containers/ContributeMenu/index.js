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
import staticText from './staticText';

function ContributeMenu(props) {
  return (
    <LanguageThemeProvider>
      <MenuBlock>
        <MenuTitle>
          <TranslatableStaticText {...staticText.header} />
        </MenuTitle>
        <MenuList>
          <MenuListItem>
            <MenuLink to="/contribute/how-it-works" onClick={props.onClick}>
              <TranslatableStaticText {...staticText.howItWorks} />
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
