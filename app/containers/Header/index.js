/**
*
* Header
*
*/

import React from 'react';
// import Link from 'components/Link';
import Logo from 'components/Logo';
import TypeMenu from 'components/TypeMenu';
import styled, { ThemeProvider } from 'styled-components';
import ModalMenu from 'containers/ModalMenu';
import Link from 'components/Link';
import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';


const Viewport = styled.div`
  position: relative;
  width: 1110px;
  text-align: left;
  display: inline-block;
`;
const PageHeader = styled.header`
  position: fixed;
  width: 100%;
  background-color: white;
  height: 92px;
  overflow: visible;
  padding: 0 20px 0px;
  z-index: 300;
  text-align: center;
`;

const ModalMenuArea = styled(ModalMenu)`
  .ReactModalPortal {
    color: blue;
  }
  .ReactModal__Overlay ReactModal__Overlay--after-open {
    z-index: 600;
    background-color: rgba(255,255,255,0.5);
  }
`;

class Header extends React.Component {

  render() {
    const {formatMessage} = this.props.intl;
    const logo = formatMessage(messages.logoLanguage);
    return (
      <ThemeProvider theme={{ ar: this.props.lang }} >
        <PageHeader>
          <Viewport>
            <Logo lang={this.props.lang}/>
            <ModalMenuArea lang={this.props.lang} />
          </Viewport>
        </PageHeader>
      </ThemeProvider>
    );
  }
}

Header.propTypes = {

};

export default injectIntl(Header);
