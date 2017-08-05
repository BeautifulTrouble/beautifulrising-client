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

import { injectIntl } from 'react-intl';
import { injectStaticText } from 'containers/TranslatableStaticText';

import staticText from './staticText';
import messages from './messages';

const Container = styled.section`
padding: 10px;
text-align: center;
border-top: 2px solid black;
margin-top: 72px;
margin-left: 20px;
margin-right: 20px;
&::before {
  content: '';
  clear: both;
  display: block;
}

`;
const Viewport = styled.div`margin-${p=>p.isArabic?'right':'left'}: 16%; width: 66%;`;
const Content = styled.div`

  p {
    font-size: 10px;
    line-height: 18px;
    font-style: italic;
    color: #828486;
    a {
      color: #828486;
    }
  }
`;
class Footer extends React.Component {


  render () {

    const {locale} = this.props.intl;
    const {buildMessage} = this.props.translatable;
    return (
      <Container>
        <Viewport isArabic={locale==='ar'}>
          <Isvg src={CreativeCommonsIcon} />
          <Content>
            <Markdown source={buildMessage(staticText.footer)} />
          </Content>
        </Viewport>
      </Container>
    );
  }

}

Footer.propTypes = {

};

export default injectIntl(injectStaticText(Footer));
