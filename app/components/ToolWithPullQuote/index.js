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
  font-size: 22px;
  line-height: 30px;
  max-width: 45%;
  padding-top: 10px;
  font-family: 'Paint Hand',  'Massira Spray', serif;
  text-transform: uppercase;
  position: relative;

  &::before {
    content: ' ';
    width: 42px;
    height: 0;
    border-bottom: 2px solid;
    position: absolute;
    top: 0;
    left: 0;
  }
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
