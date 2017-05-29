/**
*
* ToolListItem
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import Link from 'components/Link';
import AdderRemover from 'containers/Tools/AdderRemover';
import messages from './messages';
import {ToolType} from 'components/ToolsComponents';

const Container = styled.div`
  background: ${props => props.theme.bgColor};
  float: left;
  width: ${props => props.theme.listItemWidth};
  height: ${props => props.theme.listItemHeight};
  margin-right: 10px;
  margin-bottom: 10px;
  text-align: left;
  padding: 0 10px 0 50px;

  > h1 {
    font-size: 22px;
    margin: 0;
  }
  > h3 {
  }
  > p {
    margin: 0;
    font-size: ${props=>props.theme.spielFontSize};
    color: ${props=>props.theme.spielColor};
    text-align: left;
  }
  > hr {
    float: left;
    color: black;
    border-color: black;
    border-width: 2px;
    margin-top: 0px;
  }
`;

function ToolListItem(props) {
  return (
    <Container>
      <hr width="30px"/>
      <ToolType type={props.type}>{props.type}</ToolType>
      <h1><Link to={`/tool/${props.slug}`}>{props.title}</Link></h1>
      <p>{props.snapshot}</p>
    </Container>
  );
}

ToolListItem.propTypes = {

};

export default ToolListItem;
