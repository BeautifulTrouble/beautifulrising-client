/**
*
* ModalMenu
*
*/

import React from 'react';
import Modal from 'react-modal';
import Menu from 'components/Menu';
import Isvg from 'react-inlinesvg';

import OnboardingContent from 'containers/OnboardingContent';
import MenuIcon from 'assets/images/icons/menu.svg';
import CloseIcon from 'assets/images/icons/close.svg';
import styled from 'styled-components';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 600,
    overflow: 'auto',
  },
  content : {
    top                   : '5vh',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    transform             : 'translate(-50%, 0)',
    padding: '0',
    width: '1100px',
    minHeight: '80vh',
    overflow: 'visible',
    borderRadius: 0,
    border: '3px solid',
    paddingBottom: '40px'
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

export class OnboardingModal extends React.Component {
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
          isOpen={this.props.isOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <OnboardingContent />
        </Modal>
      </Viewport>
    );
  }

}

OnboardingModal.propTypes = {

};

export default OnboardingModal;
