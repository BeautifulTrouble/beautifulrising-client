/**
*
* ToolTypeAllPartial
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ToolTypeAllPartial() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ToolTypeAllPartial.propTypes = {

};

export default ToolTypeAllPartial;
