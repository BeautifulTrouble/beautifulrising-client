/**
*
* ShareButton
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ShareIcon from 'assets/images/icons/share-small.svg';
import FacebookIcon from 'assets/images/icons/facebook.svg';
import TwitterIcon from 'assets/images/icons/twitter.svg';

import Isvg from 'react-inlinesvg';

const Container = styled.div`position: relative; `;
const Button = styled.button`
  outline: none;
  padding: 0; margin: 0;
  cursor: pointer;
`;
const ShareArea = styled.div `position: absolute; width: 100px; background-color: white; border: 2px solid black; left: 0;
    top: -50px;
    display: ${props=>props.show?'block':'none'};
`;
const FacebookButton = styled(Button)`
  span svg * { fill: #3b5998; }
  padding: 10px;
  padding-left: 15px;
`;
const TwitterButton = styled(Button)`
  span svg * { fill: #1fa1fb; }
  padding: 10px;
`;

class ShareButton extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      showSocialButtons: false
    }
  }

  handleShowSocial() {
    this.setState({ showSocialButtons: !this.state.showSocialButtons });
  }

  showSocial() {
    this.setState({ showSocialButtons: true });
  }

  hideSocial() {
    this.setState({ showSocialButtons: false });
  }
  renderDefault() {
    return (
      <span>
        <Isvg src={ShareIcon} />
        <FormattedMessage {...messages.share} />
      </span>
    )
  }
  render() {
    return (
      <Container onMouseOver={this.showSocial.bind(this)} onMouseOut={this.hideSocial.bind(this)}>
        <ShareArea show={this.state.showSocialButtons}>
          <FacebookButton>
            <Isvg src={FacebookIcon} />
          </FacebookButton>
          <TwitterButton>
            <Isvg src={TwitterIcon} />
          </TwitterButton>
        </ShareArea>
        <Button>
          { this.props.children
                ? React.Children.toArray(this.props.children)
                : this.renderDefault() }
        </Button>
      </Container>
    );
  }
}

ShareButton.propTypes = {

};

export default ShareButton;
