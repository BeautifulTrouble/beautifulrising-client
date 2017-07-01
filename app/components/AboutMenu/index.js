/**
*
* AboutMenu
*
*/

import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import ContentBlock from 'components/ContentBlock';
import MenuLink from 'components/MenuLink';
import MenuBlock from 'components/MenuBlock';
import MenuList from 'components/MenuList';
import MenuListItem from 'components/MenuListItem';
import MenuTitle from 'components/MenuTitle';

import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';

const ABOUT_MENU = [
  {
    to: "/about/whats-inside",
    text: messages.toolBoxMenu
  },
  {
    to: "/about/process",
    text: messages.processMenu
  },
  {
    to: "/about/values",
    text: messages.valuesMenu
  },
  {
    to: "/about/advisory-network",
    text: messages.advisoryNetMenu
  },
  {
    to: "/about/team",
    text: messages.teamMenu
  },
  {
    to: "/about/beautiful-trouble-and-action-aid",
    text: messages.btaaMenu
  },
  {
    to: "/about/partners",
    text: messages.partnersMenu
  },
  {
    to: "/about/faq",
    text: messages.faqMenu
  },
]
function AboutMenu(props) {
  const { locale } = props.intl;
  return (
    <LanguageThemeProvider>
      <MenuBlock>
        <MenuTitle><FormattedMessage {...messages.header} /></MenuTitle>
        <ContentBlock>
          <MenuList>
            {
              ABOUT_MENU.map(item => (
                <MenuListItem key={item.to}>
                  <MenuLink to={item.to}  onClick={props.onClick}>
                    <FormattedMessage {...item.text} />
                  </MenuLink>
                </MenuListItem>
              ))
            }
          </MenuList>
        </ContentBlock>
      </MenuBlock>
    </LanguageThemeProvider>
  );
}

export default injectIntl(AboutMenu);
