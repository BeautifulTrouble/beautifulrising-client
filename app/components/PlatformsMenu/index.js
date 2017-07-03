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

import { FormattedMessage, injectIntl} from 'react-intl';
import messages from './messages';

function PlatformsMenu(props) {
  return (
    <LanguageThemeProvider>
      <MenuBlock>
        <MenuTitle><FormattedMessage {...messages.header} /></MenuTitle>
        <MenuSubtitle>
          <FormattedMessage {...messages.subheader} />
        </MenuSubtitle>
        <MenuList>
          <MenuListItem>
            <MenuLink to="/platforms/chatbot" onClick={props.onClick}>
              <FormattedMessage {...messages.chatbot} />
            </MenuLink>
          </MenuListItem>
          <MenuListItem>
            <MenuLink to="/platforms/game" onClick={props.onClick}>
              <FormattedMessage {...messages.game} />
            </MenuLink>
          </MenuListItem>
          <MenuListItem>
            <MenuLink to="/platforms/pdf" onClick={props.onClick}>
              <FormattedMessage {...messages.pdf} />
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
