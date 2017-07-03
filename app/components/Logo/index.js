/**
*
* Logo
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';


const Title = styled.h1`
  position: absolute;
  background-color: ${props=>props.withBg ? 'white' : 'transparent'};
  top: ${props=> props.top || '0' };
  ${props=>props.lang==='ar'?'right':'left'}: ${props=>props.left || '100px'};
  margin: 0;
`;

class Logo extends React.Component {

  render() {
    const {formatMessage} = this.props.intl;
    const language = this.props.intl.locale;
    const lang = formatMessage(messages.logoLanguage);

    if (this.props.isReversed !== undefined && this.props.isReversed) {
      return (
        <Title withBg={this.props.withBg} top={this.props.top} left={this.props.left} lang={language}>
          <Link to='/'><img alt={`assets/images/logo-reverse-${lang}.png`} src={require(`assets/images/logo-reverse-${lang}.png`)} /></Link>
        </Title>
      );
    } else {
      return (
        <Title withBg={this.props.withBg} top={this.props.top} left={this.props.left} lang={language}>
          <Link to='/'><img src={require(`assets/images/logo-${lang}.png`)} /></Link>
        </Title>
      );
    }
  }
}

Logo.propTypes = {

};

export default injectIntl(Logo);
