/**
*
* ToolTypeSelectedFull
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ToolTypeSelectedFull() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ToolTypeSelectedFull.propTypes = {

};

export default ToolTypeSelectedFull;
