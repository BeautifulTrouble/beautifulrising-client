/*
 *
 * LanguageChanger
 *
 */

import React, { PropTypes } from 'react';
import { push } from 'react-router';
import { connect } from 'react-redux';
import { changeLocale } from 'containers/LanguageProvider/actions';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { makeSelectLanguage } from 'containers/App/selectors';
import { loadData, langChangeReloadData } from '../App/actions';

const Container = styled.div`
  position: fixed;
  right: 50%;
  top: 10px;
  z-index: 500;
  transform: translate(530px,0);
`;
const Viewport = styled.div``;
const Button = styled.button`
  outline: none;
  cursor: pointer;
  font-family: ${props=>props.selected ? 'Avenir Black' : 'Avenir'}, sans-serif;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  list-style: none;
  display: inline-block;
  border-right: 2px solid;
  &:last-child {
    border-right: none;
  }
`;

export class LanguageChanger extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleClick(e) {
    this.props.handleChangeLocale(e.target.value);
    this.props.handleChangeLocationSignal();
  }

  render() {
    const lang = this.props.language.get('locale');
    return (
      <Container>
        <Viewport>
          <List>
            <Item>
              <Button onClick={this.handleClick.bind(this)} selected={lang === 'en'} value={'en'}>EN</Button>
            </Item>
            <Item>
              <Button onClick={this.handleClick.bind(this)} selected={lang === 'es'} value={'es'}>ES</Button>
            </Item>
            <Item>
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
      dispatch(changeLocale(locale));
    },
    handleChangeLocationSignal: () => {
      dispatch(loadData());
    }

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageChanger);
