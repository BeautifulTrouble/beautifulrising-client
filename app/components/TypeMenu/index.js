/**
*
* TypeMenu
*
*/

import React from 'react';
import styled from 'styled-components';

import Link from 'components/Link';
// import MenuTitle from 'components/MenuTitle';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const TypeMenuBlock = styled.div``;
const TypeMenuList = styled.ul``;
const TypeListItem = styled.li`
display: inline-block;
width: 18%;
margin: 0.75%;
`;

function TypeMenu() {
  return (
    <TypeMenuBlock>
      <TypeMenuList>
        <TypeListItem>
          <Link to="/type/story"><FormattedMessage {...messages.stories} /></Link>
        </TypeListItem>
        <TypeListItem>
          <Link to="/type/tactic">Tactics</Link>
        </TypeListItem>
        <TypeListItem>
          <Link to="/type/principle">Principles</Link>
        </TypeListItem>
        <TypeListItem>
          <Link to="/type/theory">Theories</Link>
        </TypeListItem>
        <TypeListItem>
          <Link to="/type/methodology">Methodologies</Link>
        </TypeListItem>
      </TypeMenuList>
    </TypeMenuBlock>
  );
}

TypeMenu.propTypes = {

};

export default TypeMenu;
