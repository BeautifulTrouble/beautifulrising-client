import React from 'react';
import Modal from 'react-modal';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import SnapshotContainer from 'component/Snapshot';

import SnapshotContent from './SnapshotContent';
import staticText from '../staticText';

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


export class Snapshot extends React.Component {
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
          {React.Children.toArray(this.props.children)}
        </Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={{...customStyles, content: {...customStyles.content}}}
          contentLabel="Example Modal"
        >
          <LanguageThemeProvider>
            <SnapshotContainer>
              <SnapshotContent {...this.props}/>
            </SnapshotContainer>
          </LanguageThemeProvider>
        </Modal>
      </Viewport>
    );
  }

}

Snapshot.propTypes = {

};

export default injectIntl(Snapshot);
