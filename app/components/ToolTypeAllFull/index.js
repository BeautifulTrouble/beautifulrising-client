/**
*
* ToolTypeAllFull
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ToolTypeAllFull() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ToolTypeAllFull.propTypes = {

};

export default ToolTypeAllFull;
