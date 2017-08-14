/*
 *
 * LanguageChanger
 *
 */

import React, { PropTypes } from 'react';
import { push } from 'react-router';
import { connect } from 'react-redux';
import { changeLocale } from 'containers/LanguageProvider/actions';
import { loadLanguage } from 'containers/TranslatableStaticText/actions';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import { makeSelectLanguage } from 'containers/App/selectors';
import { loadData, langChangeReloadData } from '../App/actions';

import MobileLanguageChanger from './MobileLanguageChanger';

const Container = styled.div`
  position: fixed;
  ${props=>props.lang==='ar'?'left: 50%': 'right:50%'}
  top: 45px;
  z-index: ${p=>p.zIndex?p.zIndex:500};
  transform: ${props=>props.lang==='ar'?'translate(-530px,0)':'translate(530px,0)'};

  // Mobile
  @media(max-width: 700px) {
    display: none;
  }
`;
const Viewport = styled.div``;
const Button = styled.button`
  outline: none;
  cursor: pointer;
  font-weight: 800; font-family: 'Avenir', 'Kaff', sans-serif;
  color: ${props=>props.selected ? 'black !important' : '#828486'};
  text-decoration: ${props=>props.selected ? 'none' : 'underline'};
  font-size: 14px;
  padding: 0 13px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  list-style: none;
  display: inline-block;
  border-right: 2px solid;
  &:${props=>props.lang==='ar'?'first-child':'last-child'} {
    border-right: none;
  }
`;

export class LanguageChanger extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleClick(e) {
    if (this.props.intl.locale !== e.target.value) {

      this.props.handleChangeLocale(e.target.value);
      this.props.handleChangeLocationSignal();
    }
  }

  render() {
    const lang = this.props.intl.locale;
    (this.props.changerClass);
    return (
      <Container lang={lang} className={this.props.changerClass} zIndex={this.props.zIndex}>
        <Viewport lang={lang}>
          <List>
            <Item lang={lang}>
              <Button onClick={this.handleClick.bind(this)} selected={lang === 'ar'} value={'ar'}>AR</Button>
            </Item>
            <Item lang={lang}>
              <Button onClick={this.handleClick.bind(this)} selected={lang === 'en'} value={'en'}>EN</Button>
            </Item>
            <Item lang={lang}>
              <Button onClick={this.handleClick.bind(this)} selected={lang === 'es'} value={'es'}>ES</Button>
            </Item>
          </List>
        </Viewport>
      </Container>
    );
  }
}

LanguageChanger.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = createStructuredSelector({
  language: makeSelectLanguage()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleChangeLocale: (locale) => {
      dispatch(changeLocale(locale))
      ;
    },
    handleChangeLocationSignal: () => {
      dispatch(loadData());
    },
    handleLoadLanguage: () => {
      dispatch(loadLanguage());
    }

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(LanguageChanger));
export { MobileLanguageChanger };
