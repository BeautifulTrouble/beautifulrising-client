/**
*
* Menu
*
*/

import React from 'react';

import { injectIntl } from 'react-intl';
import Logo from 'components/Logo';
import AboutMenu from 'containers/AboutMenu';
import ContributeMenu from 'containers/ContributeMenu';
import PlatformsMenu from 'containers/PlatformsMenu';
import TrainingMenu from 'containers/TrainingMenu';
import ContactUs from 'containers/ContactUs';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from './staticText';

import MenuArea from 'components/Menu/MenuArea';
import Home from 'components/Menu/Home';
import MenuViewport from 'components/Menu/MenuViewport';

function Menu(props) {
  const lang = props.intl.locale;

  return (
    <MenuArea lang={lang}>
      <MenuViewport>
        {/* window.location.pathname.match(/^\/(type|tag|search)|^\/$/) ? null :
            (<Home to="/" onClick={props.onClick}>
              <TranslatableStaticText {...staticText.home} />
            </Home>)
        */}
        <AboutMenu onClick={props.onClick} />
        <PlatformsMenu onClick={props.onClick}/>
        <ContributeMenu onClick={props.onClick}/>
        <TrainingMenu onClick={props.onClick}/>
        <ContactUs onClick={props.onClick} />
      </MenuViewport>
    </MenuArea>
  );
}

Menu.propTypes = {

};

export default injectIntl(Menu);
