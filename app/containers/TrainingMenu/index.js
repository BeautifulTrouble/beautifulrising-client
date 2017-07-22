/**
*
* TrainingMenu
*
*/

import React from 'react';
import {ThemeProvider} from 'styled-components';

import TranslatableStaticText from 'containers/TranslatableStaticText';

import LanguageThemeProvider from 'components/LanguageThemeProvider';
import MenuLink from 'components/MenuLink';
import MenuBlock from 'components/MenuBlock';
import MenuList from 'components/MenuList';
import MenuListItem from 'components/MenuListItem';
import MenuTitle from 'components/MenuTitle';

import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';
import keys from './constants';


function TrainingMenu(props) {
  return (
    <LanguageThemeProvider>
      <MenuBlock>
        <MenuTitle><TranslatableStaticText id={keys.KEY_TRAINING_HEADER} /></MenuTitle>
        <MenuList>
          <MenuListItem>
            <MenuLink to="/resources/training" onClick={props.onClick}>
              <TranslatableStaticText id={keys.KEY_TRAINING} />
            </MenuLink>
          </MenuListItem>
          <MenuListItem>
            <MenuLink to="/resources/other" onClick={props.onClick}>
              <TranslatableStaticText id={keys.KEY_OTHER} />
            </MenuLink>
          </MenuListItem>
        </MenuList>
      </MenuBlock>
    </LanguageThemeProvider>
  );
}

TrainingMenu.propTypes = {

};

export default injectIntl(TrainingMenu);
