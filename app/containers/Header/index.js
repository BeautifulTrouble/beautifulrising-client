/**
*
* Header
*
*/

import React from 'react';
// import Link from 'components/Link';
import Logo from 'components/Logo';
import styled, { ThemeProvider } from 'styled-components';
import ModalMenu from 'containers/ModalMenu';
import Link from 'components/Link';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Bell as WhatsHappeningBell} from 'containers/WhatsHappening';
import { MobileLanguageChanger } from 'containers/LanguageChanger';

const Viewport = styled.div`
  position: relative;
  width: 1170px;
  text-align: left;
  display: inline-block;
  // Mobile
  @media(max-width: 1170px) {
    max-width: 100%;
  }
`;
const PageHeader = styled.header`
  position: fixed;
  // position: absolute;
  width: 100%;
  background-color: white;
  height: 115px;
  overflow: visible;
  padding: 0;
  z-index: 300;
  text-align: center;

  @media(max-width: 1170px) {
    padding: 0;
    // position: relative;
    z-index: 400;
  }
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

const BellArea = styled.div`
  position: absolute;
  ${p=>p.theme.ar=='ar'?'left':'right'}: 0;
  top: 27px;

  @media(max-width: 1170px) {
    position: absolute;
    ${p=>p.theme.ar=='ar'?'left':'right'}: 15px;
    top: 25px;
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
            <MobileLanguageChanger />
            <BellArea>
              <WhatsHappeningBell />
            </BellArea>
          </Viewport>
        </PageHeader>
      </ThemeProvider>
    );
  }
}

Header.propTypes = {

};

export default injectIntl(Header);
