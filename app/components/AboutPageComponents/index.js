/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function AboutPageComponents() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

export const AboutSection = styled.div`
font-size: 24px;
`;

AboutPageComponents.propTypes = {

};

export default AboutPageComponents;
