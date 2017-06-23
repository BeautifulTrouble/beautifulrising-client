/**
*
* ToolsRequestTraining
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage, injectIntl } from 'react-intl';
import Markdown from 'react-remarkable';
import messages from './messages';

const Training = styled.div`
font-size: 14px;
line-height: 22px;

a {
  color: #828486;
}`;
function ToolsRequestTraining(props) {
  const {formatMessage} = props.intl;
  return (
    <Training>
      <Markdown source={ formatMessage(messages.requestTraining, { form: formatMessage(messages.trainingForm) })} />
    </Training>
  );
}

ToolsRequestTraining.propTypes = {

};

export default injectIntl(ToolsRequestTraining);
