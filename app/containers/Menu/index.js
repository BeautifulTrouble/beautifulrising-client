/**
*
* Menu
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import MenuLink from 'components/MenuLink';
import Logo from 'components/Logo';
import AboutMenu from 'components/AboutMenu';
import ContributeMenu from 'components/ContributeMenu';
import PlatformsMenu from 'components/PlatformsMenu';
import TrainingMenu from 'components/TrainingMenu';
import messages from './messages';

const MenuArea = styled.div`
&::before {
  content: ' ';
  position: absolute;
  top: 67px;
  left: 115px;
  background-color: white;
  z-index: 0;
  width: 182px;
  height: 20px;
}
`;

const Home = styled(MenuLink)`
  padding: 25px;
  border-bottom: solid 3px;
`;
function Menu(props) {
  return (
    <MenuArea>
      <Logo top={'16px'} left={'116px'} />
      <Home to="/">
        <FormattedMessage {...messages.home} />
      </Home>
      <AboutMenu onClick={props.onClick} />
      <PlatformsMenu onClick={props.onClick}/>
      <ContributeMenu onClick={props.onClick}/>
      <TrainingMenu onClick={props.onClick}/>
    </MenuArea>
  );
}

Menu.propTypes = {

};

export default Menu;
