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
  position: absolute;
  right: 50%;
  top: 10px;
  z-index: 500;
`;
const Viewport = styled.div``;
const Button = styled.button`
  outline: none;
  cursor: pointer;
`;

export class LanguageChanger extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleClick(e) {
    this.props.handleChangeLocale(e.target.value);
    this.props.handleChangeLocationSignal();
  }

  render() {
    return (
      <Container>
        <Viewport>
          <Button onClick={this.handleClick.bind(this)} value={'en'}>EN</Button>
          <Button onClick={this.handleClick.bind(this)} value={'es'}>ES</Button>
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
