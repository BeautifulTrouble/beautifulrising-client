/**
*
* PlatformsMenu
*
*/

import React from 'react';
import { ThemeProvider } from 'styled-components';

import LanguageThemeProvider from 'components/LanguageThemeProvider';
import MenuLink from 'components/MenuLink';
import MenuBlock from 'components/MenuBlock';
import MenuList from 'components/MenuList';
import MenuListItem from 'components/MenuListItem';
import MenuTitle from 'components/MenuTitle';
import MenuSubtitle from 'components/MenuSubtitle';
import TranslatableStaticText from 'containers/TranslatableStaticText';

import { injectIntl} from 'react-intl';
import staticText from './staticText';

function PlatformsMenu(props) {

  return (

      <MenuBlock>
      <LanguageThemeProvider>
        <MenuTitle><TranslatableStaticText {...staticText.header}/></MenuTitle>
        <MenuSubtitle>
          <TranslatableStaticText {...staticText.subheader} />
        </MenuSubtitle>
        <MenuList>
          <MenuListItem>
            <MenuLink to="/platforms/chatbot" onClick={props.onClick}>
              <TranslatableStaticText {...staticText.chatbot} />
            </MenuLink>
          </MenuListItem>
          <MenuListItem>
            <MenuLink to="/platforms/game" onClick={props.onClick}>
              <TranslatableStaticText {...staticText.game} />
            </MenuLink>
          </MenuListItem>
          <MenuListItem>
            <MenuLink to="/platforms/pdf" onClick={props.onClick}>
              <TranslatableStaticText {...staticText.pdf} />
            </MenuLink>
          </MenuListItem>
        </MenuList>
        </LanguageThemeProvider>
      </MenuBlock>

  );
}

PlatformsMenu.propTypes = {

};

export default injectIntl(PlatformsMenu);
