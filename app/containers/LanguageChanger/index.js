/*
 *
 * LanguageChanger
 *
 */

import React, { PropTypes } from 'react';
import { push } from 'react-router';
import { connect } from 'react-redux';
import { changeLocale, loadLanguage } from 'containers/LanguageProvider/actions';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { makeSelectLanguage } from 'containers/App/selectors';
import { loadData, langChangeReloadData } from '../App/actions';

const Container = styled.div`
  position: fixed;
  ${props=>props.lang==='ar'?'left: 50%': 'right:50%'}
  top: 10px;
  z-index: 500;
  transform: ${props=>props.lang==='ar'?'translate(-530px,0)':'translate(530px,0)'};
`;
const Viewport = styled.div``;
const Button = styled.button`
  outline: none;
  cursor: pointer;
  font-family: 'Avenir Black', 'Kaff Bold', sans-serif;
  color: ${props=>props.selected ? 'black' : '#828486'};
  text-decoration: ${props=>props.selected ? 'none' : 'underline'};
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
    if (this.props.language !== e.target.value) {
      this.props.handleChangeLocale(e.target.value);
      this.props.handleChangeLocationSignal();
    }
  }

  render() {
    const lang = this.props.language;
    return (
      <Container lang={lang}>
        <Viewport lang={lang}>
          <List>
            <Item lang={lang}>
              <Button onClick={this.handleClick.bind(this)} selected={lang === 'en'} value={'en'}>EN</Button>
            </Item>
            <Item lang={lang}>
              <Button onClick={this.handleClick.bind(this)} selected={lang === 'es'} value={'es'}>ES</Button>
            </Item>
            <Item lang={lang}>
              <Button onClick={this.handleClick.bind(this)} selected={lang === 'ar'} value={'ar'}>AR</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(LanguageChanger);
