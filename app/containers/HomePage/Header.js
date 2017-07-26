/**
*
* ToolListItem
*
*/

import React from 'react';
import styled from 'styled-components';

import { injectIntl } from 'react-intl';

import ToolTypeArea from 'containers/ToolTypeArea';
import SearchField from 'containers/SearchField';
import ToolsViewOptions from 'containers/ToolsViewOptions';
import ToolsSortOptions from 'containers/ToolsSortOptions';
import TranslatableStaticText from 'containers/TranslatableStaticText';

import {TextButton} from 'components/CommonComponents';
import IconButton from 'components/IconButton';

import Link from 'components/Link';


import TagArea from './TagArea';
import staticText from './staticText';

const HeaderContainer = styled.div`
  width: 789px;
  margin-left: 16px;
  margin-bottom: 20px;

  &::before {
    position: absolute;
    content: ' ';
    width: 240px;
    height: 4px;
    background-color: white;
    ${props=>props.lang==='ar' ? (props.showTools?'right: 326px':'right: 96px') : (props.showTools?'left: 325px':'left: 95px')};
    transition: left 0.3s ease, right 0.3s ease;
  }
`;

const FilterSection = styled.section`
  width: 100%;
  padding-bottom: 5px;
  padding-top: 70px;
  border-bottom: 2px solid black;

`;

function Header(props) {
  const lang = props.intl.locale;
  return (
    <HeaderContainer lang={lang} {...props}>
      <FilterSection>
        <SearchField {...props.params}/>

        <IconButton width="auto">
          <TextButton ar={lang==='ar'} selected={true}>
            <TranslatableStaticText {...staticText.tags} />
          </TextButton>
        </IconButton>
        <ToolsSortOptions />
        <ToolsViewOptions />
      </FilterSection>
      <TagArea show={true} {...props}/>
    </HeaderContainer>
  );
}

Header.propTypes = {

};

export default injectIntl(Header);
