/**
*
* TrainingMenu
*
*/

import React from 'react';
import {ThemeProvider} from 'styled-components';

import LanguageThemeProvider from 'components/LanguageThemeProvider';
import MenuLink from 'components/MenuLink';
import MenuBlock from 'components/MenuBlock';
import MenuList from 'components/MenuList';
import MenuListItem from 'components/MenuListItem';
import MenuTitle from 'components/MenuTitle';

import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';

function TrainingMenu(props) {
  return (
    <LanguageThemeProvider>
      <MenuBlock>
        <MenuTitle><FormattedMessage {...messages.header} /></MenuTitle>
        <MenuList>
          <MenuListItem>
            <MenuLink to="/resources/training" onClick={props.onClick}>
              <FormattedMessage {...messages.requestTraining} />
            </MenuLink>
          </MenuListItem>
          <MenuListItem>
            <MenuLink to="/resources/other" onClick={props.onClick}>
              <FormattedMessage {...messages.otherResources} />
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
