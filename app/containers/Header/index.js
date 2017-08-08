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

const Viewport = styled.div`
  position: relative;
  width: 1180px;
  text-align: left;
  display: inline-block;
  // Mobile
  @media(max-width: 700px) {
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
  padding: 0 20px 0px;
  z-index: 300;
  text-align: center;

  @media(max-width: 700px) {
    padding: 0;
    // position: relative;
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

  @media(max-width: 700px) {
    position: absolute;
    ${p=>p.theme.ar=='ar'?'left':'right'}: 15px;
    top: 10px;
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
