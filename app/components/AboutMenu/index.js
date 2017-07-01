/**
*
* AboutMenu
*
*/

import React from 'react';
import styled, {ThemeProvider} from 'styled-components';

import MenuLink from 'components/MenuLink';
import MenuBlock from 'components/MenuBlock';
import MenuList from 'components/MenuList';
import MenuListItem from 'components/MenuListItem';
import MenuTitle from 'components/MenuTitle';

import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';

function AboutMenu(props) {
  return (
    <ThemeProvider theme={{ar: props.intl.locale === 'ar', lang: props.intl.locale }}>
      <MenuBlock>
        <MenuTitle><FormattedMessage {...messages.header} /></MenuTitle>
        <MenuList>
          <MenuListItem>
            <MenuLink to="/about/whats-inside"  onClick={props.onClick}>
              <FormattedMessage {...messages.toolBoxMenu} />
            </MenuLink>
          </MenuListItem>
          <MenuListItem>
            <MenuLink to="/about/process" onClick={props.onClick}>
              <FormattedMessage {...messages.processMenu} />
            </MenuLink>
          </MenuListItem>
          <MenuListItem>
            <MenuLink to="/about/values" onClick={props.onClick}>
              <FormattedMessage {...messages.valuesMenu} />
            </MenuLink>
          </MenuListItem>
          <MenuListItem>
            <MenuLink to="/about/advisory-network" onClick={props.onClick}>
              <FormattedMessage {...messages.advisoryNetMenu} />
            </MenuLink>
          </MenuListItem>
          <MenuListItem>
            <MenuLink to="/about/team" onClick={props.onClick}>
              <FormattedMessage {...messages.teamMenu} />
            </MenuLink>
          </MenuListItem>
          <MenuListItem>
            <MenuLink to="/about/beautiful-trouble-and-action-aid" onClick={props.onClick}>
              <FormattedMessage {...messages.btaaMenu} />
            </MenuLink>
          </MenuListItem>
          <MenuListItem>
            <MenuLink to="/about/partners" onClick={props.onClick}>
              <FormattedMessage {...messages.partnersMenu} />
            </MenuLink>
          </MenuListItem>
          <MenuListItem>
            <MenuLink to="/about/faq" onClick={props.onClick}>
              <FormattedMessage {...messages.faqMenu} />
            </MenuLink>
          </MenuListItem>
        </MenuList>
      </MenuBlock>
    </ThemeProvider>
  );
}

export default injectIntl(AboutMenu);
