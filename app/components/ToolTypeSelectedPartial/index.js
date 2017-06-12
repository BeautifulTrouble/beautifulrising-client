/**
*
* ToolTypeSelectedPartial
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ToolTypeSelectedPartial() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ToolTypeSelectedPartial.propTypes = {

};

export default ToolTypeSelectedPartial;
