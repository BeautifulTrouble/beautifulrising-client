/**
*
* ToolEpigraph
*
*/

import React from 'react';
import styled from 'styled-components';
import Markdown from 'react-remarkable';
import { injectIntl } from 'react-intl';

const Container = styled.section`text-align: left;`;
const Viewport = styled.div``;
const Content = styled.div`
  padding-left: 15px;
  text-align: ${p=>p.ar?'right':'left'};
  & p:last-child {
    color: gray;
  }
`;

class ToolEpigraph extends React.Component {

  renderEpigraph(item) {
    const {locale} = this.props.intl;
    return(
      <Content key={item} ar={locale === 'ar'}>
        <Markdown source={item}/>
      </Content>
    )
  }

  render() {
    return (
      <Container>
        <Viewport>
            {this.props.epigraphs ? this.props.epigraphs.map(item => this.renderEpigraph(item.replace(/(—[^—]+)$/g, '\r\n\r\n$1'))) : null}
        </Viewport>
      </Container>
    );
  }

}

ToolEpigraph.propTypes = {

};

export default injectIntl(ToolEpigraph);
