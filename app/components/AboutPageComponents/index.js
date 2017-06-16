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
padding: 0 20px;
padding-top: 20px;
h2 {
  text-transform: uppercase;
  border: 3px solid;
  border-width: 0 0 3px;
  font-size: 24px;
  margin-top: 40px;
  padding: 15px 30px;
  text-align: left;
}
`;

AboutPageComponents.propTypes = {

};

export default AboutPageComponents;
