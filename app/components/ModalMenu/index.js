/**
*
* ModalMenu
*
*/

import React from 'react';
import Modal from 'react-modal';
import Menu from 'components/Menu';
import Isvg from 'react-inlinesvg';

import MenuIcon from 'assets/images/icons/menu.svg';
import CloseIcon from 'assets/images/icons/close.svg';
import styled from 'styled-components';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 600
  },
  content : {
    top                   : '0px',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-450px',
    transform             : 'translate(-570px, 0)',
    padding: '0',
    border: 'none',
    width: '300px',
    height: '100%',
    borderBottom: 'none',
    borderWidth: 0,
    overflow: 'visible',
  }
};

const Button = styled.button`
  cursor: pointer;
  outline: none;
  position: absolute;
  left: 10px;
  top: 10px;
`;

const MenuText = styled.span`{
  text-transform: 'uppercase';
  font-weight: bold;
  display: block;
  margin-top: 2px;
}`;

const CloseBox = styled.div`{
  position: absolute;
  padding: 10px;
  top: 0;
  left: 0;
  width: 100%;
  border: 3px solid;
  background-color: white;
}`;

const MenuContainer= styled.div`{
  border: 3px solid;
  padding: 75px 0px 20px;
  overflow: auto;
  height: 100vh;
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
    return (
      <Viewport>
        <Button onClick={this.openModal}>
          <Isvg src={MenuIcon} />
          <MenuText>MENU</MenuText>
        </Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <MenuContainer>
            <CloseBox>
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

export default ModalMenu;
