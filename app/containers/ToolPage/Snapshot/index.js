import React from 'react';
import Modal from 'react-modal';
import { injectIntl } from 'react-intl';
import Isvg from 'react-inlinesvg';
import { browserHistory } from 'react-router'
import CloseIcon from 'assets/images/icons/close.svg';
import { Container as SnapshotContainer, Button } from 'components/ToolPage/Snapshot';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import SnapshotContent from './SnapshotContent';
import staticText from '../staticText';

import styled from 'styled-components';

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(149, 149, 149, 0.75)',
    zIndex: 600
  },
  content : {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '0',
    width: '1035px',
    height: '533px',
    bottom: 'auto',
    border: '2px solid',
    background: 'rgb(255, 255, 255)',
    overflow: 'visible',
    outline: 'none',
    padding: '0px',
    textAlign: 'center'
  }
};

const CloseBox = styled.div`
  ${p=>p.theme.isArabic?'right':'left'}: -32px;

  position: absolute;
  background-color: white;
  z-index: 700;
  top: -22px;
  display: inline-block;
`;
const CloseButton = styled.button`
  outline: none;
  padding: 0;
`;


export class Snapshot extends React.Component {
  constructor(props) {
    super();

    this.state = {
      modalIsOpen: props.openNow ? props.openNow : false
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

    if (this.props.openNow && this.props.targetBack) {
      // 
      browserHistory.push(this.props.targetBack);
    }
  }

  render() {
    const lang = this.props.intl.locale;

    return (
      <div>
        <Button lang={lang} isArabic={lang==='ar'} noUnderline={this.props.noUnderline} onClick={this.openModal} style={this.props.buttonStyle}>
          {React.Children.toArray(this.props.children)}
        </Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={{...customStyles, content: {...customStyles.content}}}
          contentLabel="Example Modal"
        >
          <SnapshotContainer>
            <LanguageThemeProvider>
              <CloseBox lang={lang}>
                <CloseButton onClick={this.closeModal.bind(this)}>
                  <Isvg src={CloseIcon} />
                </CloseButton>
              </CloseBox>
              <SnapshotContent {...this.props}/>
            </LanguageThemeProvider>
          </SnapshotContainer>
        </Modal>
      </div>
    );
  }

}

Snapshot.propTypes = {

};

export default injectIntl(Snapshot);
