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


const Container = styled.div`
  background: ${props => props.theme.bgColor};
  float: left;
  width: 32%;
  height: 300px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

function ToolListItem(props) {
  return (
    <Container>
      <h3>{props.type}</h3>
      <h1><Link to={`/tool/${props.slug}`}>{props.title}</Link></h1>
      <p>{props.snapshot}</p>
    </Container>
  );
}

ToolListItem.propTypes = {

};

export default ToolListItem;
