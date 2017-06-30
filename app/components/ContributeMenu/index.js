/**
*
* ContributeMenu
*
*/

import React from 'react';
import {ThemeProvider} from 'styled-components';

import MenuLink from 'components/MenuLink';
import MenuBlock from 'components/MenuBlock';
import MenuList from 'components/MenuList';
import MenuListItem from 'components/MenuListItem';
import MenuTitle from 'components/MenuTitle';

import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';

function ContributeMenu(props) {
  const { locale } = props.intl;
  return (
    <ThemeProvider theme={{ar: locale==='ar', lang: locale }}>
      <MenuBlock>
        <MenuTitle><FormattedMessage {...messages.header} /></MenuTitle>
        <MenuList>
          <MenuListItem>
            <MenuLink to="/contribute/how-it-works" onClick={props.onClick}>
              <FormattedMessage {...messages.howItWorks} />
            </MenuLink>
          </MenuListItem>
        </MenuList>
      </MenuBlock>
    </ThemeProvider>
  );
}

ContributeMenu.propTypes = {

};

export default injectIntl(ContributeMenu);
