/**
*
* ShareButton
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage, injectIntl } from 'react-intl';
import messages from './messages';
import ShareIcon from 'assets/images/icons/share-small.svg';
import FacebookIcon from 'assets/images/icons/facebook.svg';
import TwitterIcon from 'assets/images/icons/twitter.svg';
import MailIcon from 'assets/images/icons/email.svg';
import { twitterShare, facebookShare } from 'utils/social';
import Isvg from 'react-inlinesvg';

const Container =
const ShareArea =
const FacebookButton =
const TwitterButton =
const MailButton =

class ShareButton extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      showSocialButtons: false
    }
  }

  renderDefault() {
    return (
      <span>
        <Isvg src={ShareIcon} />
        <FormattedMessage {...messages.share} />
      </span>
    )
  }

  handleClick(ev) {

    this.setState({showSocialButtons: !this.state.showSocialButtons});
  }

  handleTwitterClick(title, url) {
    twitterShare(title, url);
  }

  handleFacebookShare(url) {
    facebookShare(url);
  }

  render() {
    const { formatMessage } = this.props.intl;
    const url = `https://beautifulrising.org/tool/${this.props.slug}`;
    const emailMessage = formatMessage(messages.emailMessage, {url: url});
    const emailSubject = formatMessage(messages.emailSubject, {title: this.props.title });


    return (
      <Container>
        <ShareArea className={'shareArea'} lang={this.props.intl.locale} show={ this.state.showSocialButtons }>
          <TwitterButton onClick={()=>this.handleTwitterClick(this.props.title, url)}>
            <Isvg src={TwitterIcon} />
          </TwitterButton>
          <FacebookButton onClick={()=>this.handleFacebookShare(url)}>
            <Isvg src={FacebookIcon} />
          </FacebookButton>
          <MailButton href={`mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailMessage)}`}>
            <Isvg src={MailIcon} />
          </MailButton>
        </ShareArea>
        <Button onClick={this.handleClick.bind(this)}>
          { this.props.children
                ? React.Children.toArray(this.props.children)
                : this.renderDefault() }
        </Button>
      </Container>
    );
  }
}

ShareButton.propTypes = {
  title: React.PropTypes.string.isRequired,
  slug: React.PropTypes.string.isRequired
};

export default injectIntl(ShareButton);
