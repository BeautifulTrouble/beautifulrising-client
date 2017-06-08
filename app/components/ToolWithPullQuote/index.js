/**
*
* ToolWithPullQuote
*
*/

import React from 'react';
import styled from 'styled-components';
import Markdown from 'react-remarkable';

const Content = styled.div``;
const Viewport = styled.div``;
const PullQuote = styled.blockquote`
  float: left;
  padding: 0;
  margin: 10px 20px 10px 0;
  font-size: 18px;
  max-width: 45%;
  border-top: 2px solid black;
  padding-top: 10px;
`;
class ToolWithPullQuote extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const count = 2 + ((Math.random() * 100) % 2);
    let contents = this.props.content.map((item, ind) => { return (<Markdown key={ind} source={item} />) });

    contents.splice(count, 0, (<PullQuote key={Math.random()}>"{this.props.pullQuote}"</PullQuote>));

    return (
      <Content>
        <Viewport>
          { contents }
        </Viewport>
      </Content>
    );
  }
}

ToolWithPullQuote.propTypes = {

};

export default ToolWithPullQuote;
