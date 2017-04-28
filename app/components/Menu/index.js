/**
*
* Menu
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import Link from 'components/Link';
import AboutMenu from 'components/AboutMenu';
import ContributeMenu from 'components/ContributeMenu';
import PlatformsMenu from 'components/PlatformsMenu';
import TrainingMenu from 'components/TrainingMenu';
import messages from './messages';

function Menu() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <Link to="/">Home</Link>
      <AboutMenu />
      <PlatformsMenu />
      <ContributeMenu />
      <TrainingMenu />
    </div>
  );
}

Menu.propTypes = {

};

export default Menu;
