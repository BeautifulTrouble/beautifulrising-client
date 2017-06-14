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
  top: ${props=>props.top || '0'};
  left: ${props=>props.left || '100px'};
  margin: 0;
`;

class Logo extends React.Component {
  render() {
    const {formatMessage} = this.props.intl;
    const logo = formatMessage(messages.logoLanguage);

    console.log(this.props);
    if (this.props.isReversed !== undefined && this.props.isReversed) {
      console.log("IN!");
      return (
        <Title withBg={this.props.withBg} top={this.props.top} left={this.props.left}>
          <Link to='/'><img src={require(`assets/images/logo-reverse-${logo}.png`)} /></Link>
        </Title>
      );
    } else {
      return (
        <Title withBg={this.props.withBg} top={this.props.top} left={this.props.left}>
          <Link to='/'><img src={require(`assets/images/logo-${logo}.png`)} /></Link>
        </Title>
      );
    }
  }
}

Logo.propTypes = {

};

export default injectIntl(Logo);
