/**
*
* ToolWithPullQuote
*
*/

import React from 'react';
import styled from 'styled-components';
import Markdown from 'react-remarkable';
import { injectIntl } from 'react-intl';
const Content = styled.div``;
const Viewport = styled.div``;
const PullQuote = styled.blockquote`
  float: ${p=>p.ar?'right':'left'};
  padding: 0;
  margin: 10px 0 10px 0;
  margin-${p=>p.ar?'left':'right'}: 20px;
  line-height: 30px;
  max-width: 45%;
  padding: 10px 0;
  p, div, span {
    font-family: 'Paint Hand',  'Massira Spray', serif;
    display: inline;
  }

  text-transform: uppercase;
  position: relative;

  font-size: 20px;
  margin-left: 20px;

  &::before {
    content: ' ';
    width: 42px;
    height: 0;
    border-bottom: 2px solid;
    position: absolute;
    top: 0;
    ${p=>p.ar?'right':'left'}: 0;
  }
`;
class ToolWithPullQuote extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const {locale} = this.props.intl;
    const count = 1 + ((Math.random() * 100) % 2);
    let contents = this.props.content.map((item, ind) => { return (<Markdown key={ind} source={item} />) });
    let pullQuote = <Markdown source={this.props.pullQuote} />
    contents.splice(count, 0, (<PullQuote ar={locale==='ar'} key={Math.random()}>"{pullQuote}"</PullQuote>));

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

export default injectIntl(ToolWithPullQuote);
