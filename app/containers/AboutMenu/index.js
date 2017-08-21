/**
*
* AboutMenu
*
*/

import React from 'react';
import TranslatableStaticText from 'containers/TranslatableStaticText';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import ContentBlock from 'components/ContentBlock';
import MenuLink from 'components/MenuLink';
import MenuBlock from 'components/MenuBlock';
import MenuList from 'components/MenuList';
import MenuListItem from 'components/MenuListItem';
import MenuTitle from 'components/MenuTitle';

import { injectIntl } from 'react-intl';
import messages from './messages';
import { ABOUT_MENU, KEY_MENU_ABOUT } from './constants';

function AboutMenu(props) {
  const { locale } = props.intl;

  return (
      <MenuBlock isArabic={locale==='ar'}>
        <LanguageThemeProvider>
          <MenuTitle>
            <TranslatableStaticText id={KEY_MENU_ABOUT} />
          </MenuTitle>
          <MenuList>
            {
              ABOUT_MENU.map(item => (

                <MenuListItem key={item.to}>
                  <MenuLink to={item.to}  onClick={props.onClick}>
                    <TranslatableStaticText id={item.text} />
                  </MenuLink>
                </MenuListItem>
              ))
            }
          </MenuList>
        </LanguageThemeProvider>
      </MenuBlock>
  );
}

export default injectIntl(AboutMenu);
