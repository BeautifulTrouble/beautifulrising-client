/**
*
* PlatformsMenu
*
*/

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { slugify } from 'utils/tags';
import { connect } from 'react-redux';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import MenuLink from 'components/MenuLink';
import MenuBlock from 'components/MenuBlock';
import MenuList from 'components/MenuList';
import MenuListItem from 'components/MenuListItem';
import MenuTitle from 'components/MenuTitle';
import MenuSubtitle from 'components/MenuSubtitle';
import TranslatableStaticText from 'containers/TranslatableStaticText';
import { createStructuredSelector } from 'reselect';
import { makeSelectAllToolsWithSlugIndex } from 'containers/App/selectors';

import { injectIntl} from 'react-intl';
import staticText from './staticText';

function PlatformsMenu(props) {

  const {locale} = props.intl;

  const platformMenu = props.aboutData.getIn(['platforms','all']).toJS();
  return (

      <MenuBlock isArabic={locale==='ar'}>
      <LanguageThemeProvider>
        <MenuTitle><TranslatableStaticText {...staticText.header}/></MenuTitle>
        <MenuSubtitle>
          <TranslatableStaticText {...staticText.subheader} />
        </MenuSubtitle>
        <MenuList>
          {platformMenu.map((item,index) => (
            <MenuListItem>
              <MenuLink to={`/platforms/${slugify(item.title)}`} onClick={props.onClick}>
                {item.title}
              </MenuLink>
            </MenuListItem>
          ))}
        </MenuList>
        </LanguageThemeProvider>
      </MenuBlock>

  );
}

PlatformsMenu.propTypes = {

};

const mapStateToProps = createStructuredSelector({
  aboutData: makeSelectAllToolsWithSlugIndex()
});


export default connect(mapStateToProps, null)(injectIntl(PlatformsMenu));
