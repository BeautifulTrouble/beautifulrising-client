/**
*
* ToolEpigraph
*
*/

import React from 'react';
import styled from 'styled-components';
import Markdown from 'react-remarkable';

const Container = styled.section`text-align: left;`;
const Viewport = styled.div``;
const Content = styled.div`

  & p:last-child {
    color: gray;
  }
`;

class ToolEpigraph extends React.Component {

  renderEpigraph(item) {
    return(
      <Content key={item}>
        <Markdown source={item}/>
      </Content>
    )
  }

  render() {
    return (
      <Container>
        <Viewport>
            {this.props.epigraphs ? this.props.epigraphs.map(item => this.renderEpigraph(item.replace(/—/g, '\r\n\r\n––'))) : null}
        </Viewport>
      </Container>
    );
  }

}

ToolEpigraph.propTypes = {

};

export default ToolEpigraph;
