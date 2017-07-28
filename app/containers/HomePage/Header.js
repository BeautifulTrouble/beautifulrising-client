/**
*
* ToolListItem
*
*/

import React from 'react';
import styled from 'styled-components';
import Isvg from 'react-inlinesvg';

import { injectIntl } from 'react-intl';

import ToolTypeArea from 'containers/ToolTypeArea';

import SearchField from 'containers/SearchField';
import ToolsViewOptions from 'containers/ToolsViewOptions';
import ToolsSortOptions from 'containers/ToolsSortOptions';
import TranslatableStaticText from 'containers/TranslatableStaticText';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import {TextButton} from 'components/CommonComponents';
import IconButton from 'components/IconButton';
import ArrowIcon from 'assets/images/icons/arrow.svg';

import TypeDetails from 'containers/TypeDetails';
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

const FilterSection = styled.ul`
  width: 100%;
  padding-bottom: 5px;
  padding-top: 70px;
  border-bottom: 2px solid black;
  padding-left: 0px
  display: flex;
  list-style: none;
`;

const FilterItem = styled.li`
  display: inline-block;
  list-style: none;
  position: relative;
  padding-right: 24px;
    padding-left: 0;
    position: relative;

  &::after {
    content: ' ';
    border-right: 2px solid;
    position: absolute;
    height: 12px;
    right: 11px;
    top: 7px;
  }

  &:last-child {
    padding-right: 0;
    margin-${p=>p.theme.isArabic ? 'left' : 'right'}: -6px;
    &::after { border-right: none; }
  }
`;

const TagShownIcon = styled.div`
  display: inline-block;
  transform: rotate(270deg);
  opacity: ${p=>p.selected ? 1 : 0.3}
  margin-left: 5px;
  margin-top: -5px;

  svg { width: 10px !important; }
  svg * {
    fill: black;
  }
`;

class Header extends React.PureComponent {

  constructor() {
    super();

    this.state = {
      isTagsAreaShown: false
    }
  }

  toggleTagArea() {
    this.setState({isTagsAreaShown: !this.state.isTagsAreaShown });
  }

  hideTagArea() {
    this.setState({isTagsAreaShown: false });
  }

  showTagArea(){
    this.setState({isTagsAreaShown: true });
  }
  render() {
    const lang = this.props.intl.locale;
    const showTypeDetails=this.props.params.filter==="type";
    return (
      <LanguageThemeProvider>
        <HeaderContainer lang={lang} {...this.props}>
          <FilterSection>
            <FilterItem style={{ flexGrow: 1 }}>
              <SearchField {...this.props.params}/>
            </FilterItem>
            <FilterItem>
              <IconButton width="auto" onClick={this.toggleTagArea.bind(this)}>
                <TextButton ar={lang==='ar'} selected={true}>
                  <TranslatableStaticText {...staticText.tags} />
                  <TagShownIcon  selected={this.state.isTagsAreaShown}>
                    <Isvg src={ArrowIcon}/>
                  </TagShownIcon>
                </TextButton>
              </IconButton>
            </FilterItem>

            <FilterItem>
              <ToolsSortOptions />
            </FilterItem>
            <FilterItem>
              <ToolsViewOptions />
            </FilterItem>
          </FilterSection>
          <TagArea show={true} {...this.props} show={this.state.isTagsAreaShown} hideTagArea={this.hideTagArea.bind(this)}/>
          <TypeDetails show={showTypeDetails} {...this.props.params} />
        </HeaderContainer>
      </LanguageThemeProvider>
    );
  }

}

Header.propTypes = {

};

export default injectIntl(Header);
