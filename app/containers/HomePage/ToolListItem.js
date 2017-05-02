/**
*
* ToolListItem
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Link from 'components/Link';

function ToolListItem(props) {
  return (
    <div>
      <h3>{props.type}</h3>
      <h1><Link to={`/tool/${props.slug}`}>{props.title}</Link></h1>
      <p>{props.snapshot}</p>
    </div>
  );
}

ToolListItem.propTypes = {

};

export default ToolListItem;
