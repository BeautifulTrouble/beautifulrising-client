/**
*
* ToolListItem
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Link from 'components/Link';

const Container = styled.div`
  background: ${props => props.theme.bgColor};
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
