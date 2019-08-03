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
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import TranslatableStaticText from 'containers/TranslatableStaticText';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Bell as WhatsHappeningBell} from 'containers/WhatsHappening';
import { MobileLanguageChanger } from 'containers/LanguageChanger';

const Viewport = styled.div`
  position: relative;
  width: 1170px;
  text-align: left;
  display: inline-block;
  top: 40px;
  // Mobile
  @media(max-width: 1320px) {
    max-width: 100%;
  }
`;
const PageHeader = styled.header`
  position: fixed;
  // position: absolute;
  width: 100%;
  background-color: white;
  height: 155px;
  overflow: visible;
  padding: 0;
  z-index: 300;
  text-align: center;

  @media(max-width: 1320px) {
    padding: 0;
    // position: relative;
    height: 130px;
    z-index: 400;
  }
`;
const DonateHeader = styled.div`
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: black;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  text-align: ${p=>p.theme.ar=='ar'?'right':'left'};
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 1170px;
  }
  a {
    text-decoration: none;
    color: white;
  }
  @media(max-width: 1320px) {
    a {
      padding: 0 20px;
    }
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

  @media(max-width: 1320px) {
    position: absolute;
    ${p=>p.theme.ar=='ar'?'left':'right'}: 30px;
    top: 25px;
  }
`;

const staticText = {
  donate: {
    id: 'menu.donate',
    defaultMessage: 'Donate'
  }
};

class Header extends React.Component {

  render() {
    const {formatMessage} = this.props.intl;
    const logo = formatMessage(messages.logoLanguage);
    return (
      <LanguageThemeProvider theme={{ ar: this.props.lang }} >
        <PageHeader>
          <Viewport>
            <DonateHeader>
                <div><a href="http://donate.beautifultrouble.org" target="_blank"><TranslatableStaticText {...staticText.donate} /></a></div>
            </DonateHeader>
            <Logo lang={this.props.lang}/>
            <ModalMenuArea lang={this.props.lang} />
            <MobileLanguageChanger />
            <BellArea>
              <WhatsHappeningBell />
            </BellArea>
          </Viewport>
        </PageHeader>
      </LanguageThemeProvider>
    );
  }
}

Header.propTypes = {

};

export default injectIntl(Header);
