/**
*
* ToolsRequestTraining
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import messages from './messages';

function ToolsRequestTraining() {
  return (
    <div>
      <FormattedHTMLMessage {...messages.requestTraining} />
    </div>
  );
}

ToolsRequestTraining.propTypes = {

};

export default ToolsRequestTraining;
