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

const MobileHeaderContainer = styled.div`
  width: 100%;
  margin-top: 10px;

  padding-right: 15px;
  padding-left: 15px;

  &::before {
    position: absolute;
    content: ' ';
    width: 240px;
    height: 4px;
    background-color: white;
    ${props=>props.theme.lang==='ar' ? (props.showTools?'right: 326px':'right: 96px') : (props.showTools?'left: 325px':'left: 95px')};
    transition: left 0.3s ease, right 0.3s ease;
  }
`;

const FilterSection = styled.ul`
  width: 100%;
  padding-bottom: 5px;
  border-bottom: 2px solid black;
  padding-${p=>p.theme.isArabic?'right':'left'}: 0px;
  display: flex;
  list-style: none;
  margin: 0;

  @media(max-width: 700px) {
    flex-wrap: wrap;

    &::after {
      content: ' ';
      border: 1px solid white;
      position: absolute;
      right: 0;
      top: 0;
      height: 68px;
    }

    &:first-child {
      border-bottom: 0;
    }
  }
`;

const FilterItem = styled.li`
  display: inline-block;
  list-style: none;
  position: relative;
  padding-left: ${p=>p.sidePadding || 0};
  padding-right: ${p=>p.sidePadding || 0};
  position: relative;
  text-align: ${p=>p.theme.isArabic?'right': 'left'};

  ${p=>{
      if (p.last) {
          return p.theme.isArabic?'padding-left:0;':'padding-right:0';
      } else { return null; }
  }}

  &::after {
    content: ' ';
    border-${p=>p.theme.isArabic?'left':'right'}: 2px solid;
    position: absolute;
    height: 12px;
    ${p=>p.theme.isArabic?'left':'right'}: 0px;
    top: 7px;
  }

  &:first-child {
    flex-grow: 1;
  }
  &:last-child {
    padding-${p=>p.theme.isArabic?'left':'right'}: 0;
    width: 110px;
    text-align: center;
    &::after { border-${p=>p.theme.isArabic?'left':'right'}: none; }
  }
`;

const TagShownIcon = styled.div`
  display: inline-block;
  ${p=>{
    if(p.theme.isArabic) {
      return `transform: ${p.selected?'rotate(270deg)':'rotate(360deg)'};`
    } else {
      return `transform: ${p.selected?'rotate(270deg)':'rotate(180deg)'};`;
    }
  }}
  margin-${p=>p.theme.isArabic?'right':'left'}: 12px;
  margin-top: -5px;
  transition: transform 0.5s ease;

  svg { width: 10px !important; }
  svg * {
    fill: ${p=>p.selected?'black':'#ACACAC'};
    transition: fill 0.5s ease;
  }
`;

class MobileHeader extends React.PureComponent {

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
        <MobileHeaderContainer {...this.props}>
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
          </FilterSection>
          <FilterSection>
            <FilterItem>
              <ToolsSortOptions />
            </FilterItem>
            <FilterItem last={true}>
              <ToolsViewOptions />
            </FilterItem>
          </FilterSection>
          <TagArea show={true} {...this.props} show={this.state.isTagsAreaShown} hideTagArea={this.hideTagArea.bind(this)}/>
          <TypeDetails show={showTypeDetails} {...this.props.params} />
        </MobileHeaderContainer>
      </LanguageThemeProvider>
    );
  }

}

MobileHeader.propTypes = {

};

export default injectIntl(MobileHeader);
