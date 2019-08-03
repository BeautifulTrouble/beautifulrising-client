/*
 *
 * LanguageChanger
 *
 */

import React, { PropTypes } from 'react';
import Modal from 'react-modal';
import Isvg from 'react-inlinesvg';

import ArrowIcon from 'assets/images/icons/arrow.svg';
import { push } from 'react-router';
import { connect } from 'react-redux';
import { changeLocale } from 'containers/LanguageProvider/actions';
import { loadLanguage } from 'containers/TranslatableStaticText/actions';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import { makeSelectLanguage } from 'containers/App/selectors';
import { loadData, langChangeReloadData } from '../App/actions';


const customStyles = {
  overlay: {
    backgroundColor: 'rgba(149, 149, 149, 0.75)',
    zIndex: 800
  },
  content : {
    position: 'absolute',
    right: 'auto',
    left: 'auto',
    top: '140px',
    bottom: 'auto',
    border: '0px none',
    background: 'none',
    overflow: 'visible',
    outline: 'none',
    padding: '0px',
    width: '100%',
    textAlign: 'center'
  }
};

const Container = styled.div`
  display: none;
  position: fixed;
  z-index: ${p=>p.zIndex?p.zIndex:500};
  ${p=>p.lang==='ar'?'left':'right'}: 5px;
  top: 7px;

  @media(max-width: 1320px) {
    display: block;
  }
`;
const Viewport = styled.div``;
const Button = styled.button`
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 800; font-family: 'Avenir', 'Kaff', sans-serif;
  color: ${props=>props.selected ? 'white' : '#828486'};
  text-decoration: ${props=>props.selected ? 'none' : 'underline'};
  font-size: 14px;
  padding: 0 13px;
  position: relative;
`;

const LanguageChooser = styled(Button)`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;

  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
  }

  &::after {
    content: ' ';
    width: 50px;
    height: 50px;
    background-color: black;
    position: absolute;
    border-radius: 50%;
    border: 2px solid black;
    top: 0;
    left: 0;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  list-style: none;
  display: block;
`;

const ArrowSvg = styled(Isvg)`
  transform: rotate(270deg);
  display: inline-block;
  top: 0px;
  position: relative;

  svg {
    width: 10px;
    height: 10px;
  }

  svg * {
    fill: white;
  }
`;

export class MobileLanguageChanger extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.handleClick = this.handleClick.bind(this)
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  toggleModal() {
    this.setState({modalIsOpen: !this.state.modalIsOpen});
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleClick(language) {


    if (this.props.intl.locale !== language) {

      this.props.handleChangeLocale(language);
      this.props.handleChangeLocationSignal();
      // this.setState({modalIsOpen: false});
    } else {
      this.setState({modalIsOpen: false});
    }

  }

  render() {
    const lang = this.props.intl.locale;
    return (
      <Container lang={lang} zIndex={this.props.zIndex}>
        <Button onClick={this.toggleModal.bind(this)} selected={true} >
          { lang } <ArrowSvg src={ArrowIcon} />
        </Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={{...customStyles, content: {...customStyles.content}}}
          contentLabel="Example Modal"
          overlayClassName={'MenuModalOverlay'}
        >
          <Viewport lang={lang}>
            <List>
              <Item lang={lang}>
                <LanguageChooser onClick={()=>this.handleClick('ar')} selected={lang === 'ar'} value={'ar'}>
                  <span>AR</span>
                </LanguageChooser>
              </Item>
              <Item lang={lang}>
                <LanguageChooser onClick={()=>this.handleClick('en')} selected={lang === 'en'} value={'en'}>
                  <span>EN</span>
                </LanguageChooser>
              </Item>
              <Item lang={lang}>
                <LanguageChooser onClick={()=>this.handleClick('es')} selected={lang === 'es'} value={'es'}>
                  <span>ES</span>
                </LanguageChooser>
              </Item>
              <Item lang={lang}>
                <LanguageChooser onClick={()=>this.handleClick('pt')} selected={lang === 'pt'} value={'pt'}>
                  <span>PT</span>
                </LanguageChooser>
              </Item>
            </List>
          </Viewport>
        </Modal>
      </Container>
    );
  }
}

MobileLanguageChanger.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(MobileLanguageChanger));
