/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled from 'styled-components';
import ContentBlock from 'components/ContentBlock';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

function AboutPageComponents() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}


AboutPageComponents.propTypes = {

};

export default AboutPageComponents;
