/**
*
* ContributeMenu
*
*/

import React from 'react';

import { injectIntl } from 'react-intl';
import TranslatableStaticText from 'containers/TranslatableStaticText';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import MenuLink from 'components/MenuLink';
import MenuBlock from 'components/MenuBlock';
import MenuList from 'components/MenuList';
import MenuListItem from 'components/MenuListItem';
import MenuTitle from 'components/MenuTitle';
import staticText from './staticText';

function ContributeMenu(props) {
  const { locale } = props.intl;
  return (

      <MenuBlock isArabic={locale==='ar'}>
        <LanguageThemeProvider>
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
        </LanguageThemeProvider>
      </MenuBlock>

  );
}

ContributeMenu.propTypes = {

};

export default injectIntl(ContributeMenu);
