/**
*
* ModalMenu
*
*/

import React from 'react';
import Modal from 'react-modal';
import Menu from 'containers/Menu';
import Isvg from 'react-inlinesvg';
import { injectIntl } from 'react-intl';
import MenuIcon from 'assets/images/icons/menu.svg';
import CloseIcon from 'assets/images/icons/close.svg';
import styled from 'styled-components';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from './staticText';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(149, 149, 149, 0.75)',
    zIndex: 600
  },
  content : {
    position: 'absolute',
    right: 'auto',
    left: 'auto',
    top: '0px',
    bottom: 'auto',
    border: '0px none',
    background: 'rgb(255, 255, 255)',
    overflow: 'visible',
    outline: 'none',
    padding: '0px',
    width: '100%',
    textAlign: 'center'
  }
};

const Button = styled.button`
  cursor: pointer;
  outline: none;
  position: absolute;
  ${props=>props.lang==='ar'?'right':'left'}: -1px;
  top: 10px;
`;

const MenuText = styled.span`{
  text-transform: uppercase;
  font-weight: bold;
  display: block;
  margin-top: 2px;
}`;

const CloseBox = styled.div`{
  position: absolute;
  padding: 10px;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: ${props=>props.lang==='ar'?'right':'left'};
  width: 1100px;
  border: 2px solid;
  background-color: white;

}`;

const MenuContainer= styled.div`{
  border: 2px solid;
  padding: 75px 0px 20px;
  overflow: auto;
  width: 1100px;
  display: inline-block;
}`;
const CloseButton = styled.button`{

}`;

const Viewport = styled.div`{
  position: relative;
}`;

export class ModalMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  render() {
    const lang = this.props.intl.locale;
    return (
      <Viewport>
        <Button lang={lang} onClick={this.openModal}>
          <Isvg src={MenuIcon} />
          <MenuText>
            <TranslatableStaticText {...staticText.header} />
          </MenuText>
        </Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={{...customStyles, content: {...customStyles.content}}}
          contentLabel="Example Modal"
        >
          <MenuContainer>
            <CloseBox lang={lang}>
              <CloseButton onClick={this.closeModal.bind(this)}>
                <Isvg src={CloseIcon} />
              </CloseButton>
            </CloseBox>
            <Menu onClick={this.closeModal.bind(this)} />
          </MenuContainer>
        </Modal>
      </Viewport>
    );
  }

}

ModalMenu.propTypes = {

};

export default injectIntl(ModalMenu);
