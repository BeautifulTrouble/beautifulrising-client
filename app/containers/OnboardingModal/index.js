/**
*
* ModalMenu
*
*/

import React from 'react';
import Modal from 'react-modal';
import Isvg from 'react-inlinesvg';
import { injectIntl } from 'react-intl';
import OnboardingContent from 'containers/OnboardingContent';
import MenuIcon from 'assets/images/icons/menu.svg';
import CloseIcon from 'assets/images/icons/close.svg';
import styled from 'styled-components';
import LanguageChanger from 'containers/LanguageChanger';

const customStyles = (lang) => { return {
  overlay: {
    backgroundColor: 'hsla(0,0%,58%,.75)',
    zIndex: 600,
    overflow: 'auto',
  },
  content : {
    direction: `${lang==='ar' ? 'rtl':'ltr'}`,
    textAlign: `${lang==='ar' ? 'right':'left'}`,
    top                   : '75px',
    left                  : `${lang==='ar' ? 'auto':'50%'}`,
    right                 : `${lang==='ar' ? '50%':'auto'}`,
    bottom                : 'auto',
    transform             : `${lang==='ar' ? 'translate(50%,0)':'translate(-50%,0)'}`,
    padding: '0',
    width: '960px',
    // minHeight: '80vh',
    overflow: 'visible',
    borderRadius: 0,
    border: '2px solid',
    paddingBottom: '40px'
  }
}};

const Button = styled.button`
  cursor: pointer;
  outline: none;
  position: absolute;
  ${p=>p.lang==='ar'?'right':'left'}: 10px;
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
  ${p=>p.lang==='ar'?'right':'left'}: 0;
  width: 100%;
  border: 2px solid;
  background-color: white;
}`;

const MenuContainer= styled.div`{
  border: 2px solid;
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

  renderLanguageChanger() {
    return (<LanguageChanger zIndex={1000} />);
  }
  render() {
    const lang = this.props.intl.locale;
    return (
      <Viewport>
        {this.renderLanguageChanger()}
        <Button lang={lang} onClick={this.openModal}>
          <Isvg src={MenuIcon} />
          <MenuText>MENU</MenuText>
        </Button>
        <Modal
          isOpen={this.props.isOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles(lang)}
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

export default injectIntl(OnboardingModal);
