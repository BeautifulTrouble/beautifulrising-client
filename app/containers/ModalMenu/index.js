/**
*
* ModalMenu
*
*/

import React from 'react';
import Modal from 'react-modal';
import Menu from 'containers/Menu';
import Logo from 'components/Logo';
import Isvg from 'react-inlinesvg';
import { injectIntl } from 'react-intl';
import MenuIcon from 'assets/images/icons/menu.svg';
import CloseIcon from 'assets/images/icons/close.svg';
import styled from 'styled-components';
import { MobileLanguageChanger } from 'containers/LanguageChanger';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from './staticText';
import { Bell as WhatsHappeningBell} from 'containers/WhatsHappening';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(149, 149, 149, 0.75)',
    zIndex: 1100
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
    textAlign: 'center',
    zIndex: '900'
  }
};

const Button = styled.button`
  cursor: pointer;
  outline: none;
  position: absolute;
  ${props=>props.lang==='ar'?'right':'left'}: -1px;
  top: 10px;

  //mobile
  @media(max-width: 1170px) {
    ${props=>props.lang==='ar'?'right':'left'}: 0px;
    top: 0px;
  }
`;

const MenuText = styled.span`{
  text-transform: uppercase;
  font-weight: bold;
  display: block;
  margin-top: 2px;
}`;

const CloseBox = styled.div`
  text-align: ${props=>props.lang==='ar'?'right':'left'};
  padding: 35px 0;
  top: 0;
  width: 1170px;
  display: inline-block;
  height: 122px;
  position: relative;

  // Mobile
  @media(max-width: 1170px) {
    width: 100%;
    padding: 20px 0;
  }
`;

const MenuContainer= styled.div`
  border: solid black;
  border-width: 2px 2px 0;
  // padding: 0 0px 20px;
  overflow: auto;
  width: 100%;
  text-align: center;

  &::after {
    display: block;
    content: ' ';
    clear: both;
  }

`;
const CloseButton = styled.button`

`;

const Viewport = styled.div`
  position: relative;
`;

const MenuSection = styled.section`
  width: 100%;
  border-bottom: 2px solid black;
`;
const MenuHeaderSection = styled(MenuSection)``;
const MenuBodySection = styled(MenuSection)`
  @media(max-width: 1170px) {
    overflow: auto;
    height: calc(100vh - 124px);
  }
`;

const BellArea = styled.div`
  position: absolute;
  ${p=>p.theme.isArabic?'left':'right'}: -5px;
  top: 42px;

  @media(max-width: 1170px) {
    ${p=>p.theme.isArabic?'left':'right'}: 13px;
    top: 26px;
  }
`;


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
          contentLabel="MenuModal"
          overlayClassName={'MenuModalOverlay'}
        >
          <MenuContainer>
            <MenuHeaderSection>
              <LanguageThemeProvider>
                <MobileLanguageChanger />
                <CloseBox lang={lang}>
                  <CloseButton onClick={this.closeModal.bind(this)}>
                    <Isvg src={CloseIcon} />
                  </CloseButton>
                  <Logo top={'17px'} left={'115px'} />
                  <BellArea>
                    <WhatsHappeningBell onClick={this.closeModal.bind(this)} />
                  </BellArea>
                </CloseBox>
              </LanguageThemeProvider>
            </MenuHeaderSection>
            <MenuBodySection>
              <Menu onClick={this.closeModal.bind(this)} />
            </MenuBodySection>
          </MenuContainer>
        </Modal>
      </Viewport>
    );
  }

}

ModalMenu.propTypes = {

};

export default injectIntl(ModalMenu);
