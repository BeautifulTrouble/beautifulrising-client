/**
*
* Footer
*
*/

import React from 'react';
import CreativeCommonsIcon from 'assets/images/icons/creative-commons.svg'
import styled from 'styled-components';
import Markdown from 'react-remarkable';
import Isvg from 'react-inlinesvg';

import { injectIntl, FormattedMessage } from 'react-intl';
import messages from './messages';

const Container = styled.section`
padding: 10px;
text-align: center;
border-top: 3px solid black;
margin-top: 50px;

&::before {
  content: '';
  clear: both;
  display: block;
}
`;
const Viewport = styled.div``;
const Content = styled.div``;
class Footer extends React.Component {


  render () {

    const {formatMessage} = this.props.intl;

    return (
      <Container>
        <Viewport>
          <Isvg src={CreativeCommonsIcon} />
          <Content>
            <Markdown source={formatMessage(messages.footer)} />
          </Content>
        </Viewport>
      </Container>
    );
  }

}

Footer.propTypes = {

};

export default injectIntl(Footer);
