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

import { FormattedMessage, injectIntl} from 'react-intl';
import keys from './constants';

function PlatformsMenu(props) {
  console.log("~~~~", keys.KEY_PLATFORMS_HEADER);
  return (
    <LanguageThemeProvider>
      <MenuBlock>
        <MenuTitle><TranslatableStaticText text={keys.KEY_PLATFORMS_HEADER}/></MenuTitle>
        <MenuSubtitle>
          <TranslatableStaticText text={keys.KEY_PLATFORMS_SUBHEADER} />
        </MenuSubtitle>
        <MenuList>
          <MenuListItem>
            <MenuLink to="/platforms/chatbot" onClick={props.onClick}>
              <TranslatableStaticText text={keys.KEY_PLATFORMS_CHAT_BOT} />
            </MenuLink>
          </MenuListItem>
          <MenuListItem>
            <MenuLink to="/platforms/game" onClick={props.onClick}>
              <TranslatableStaticText text={keys.KEY_PLATFORMS_GAME} />
            </MenuLink>
          </MenuListItem>
          <MenuListItem>
            <MenuLink to="/platforms/pdf" onClick={props.onClick}>
              <TranslatableStaticText text={keys.KEY_PLATFORMS_PDF} />
            </MenuLink>
          </MenuListItem>
        </MenuList>
      </MenuBlock>
    </LanguageThemeProvider>
  );
}

PlatformsMenu.propTypes = {

};

export default injectIntl(PlatformsMenu);
