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

import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';
import { ABOUT_MENU, KEY_MENU_ABOUT } from './constants';

function AboutMenu(props) {
  const { locale } = props.intl;
  console.log("About Menu", ABOUT_MENU);
  return (
    <LanguageThemeProvider>
      <MenuBlock>
        <MenuTitle>
          <TranslatableStaticText text={KEY_MENU_ABOUT} />
        </MenuTitle>
        <MenuList>
          {
            ABOUT_MENU.map(item => (

              <MenuListItem key={item.to}>
                <MenuLink to={item.to}  onClick={props.onClick}>
                  <TranslatableStaticText text={item.text} more={console.log(item.text)}/>
                </MenuLink>
              </MenuListItem>
            ))
          }
        </MenuList>
      </MenuBlock>
    </LanguageThemeProvider>
  );
}

export default injectIntl(AboutMenu);
