/**
*
* ToolsRequestTraining
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import messages from './messages';

const Training = styled.div`
font-size: 14px;
line-height: 22px;

a {
  color: #828486;
}`;
function ToolsRequestTraining() {
  return (
    <Training>
      <FormattedHTMLMessage {...messages.requestTraining} />
    </Training>
  );
}

ToolsRequestTraining.propTypes = {

};

export default ToolsRequestTraining;
