/**
*
* AboutPageComponents
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { AboutSection } from 'components/AboutPageComponents';

import messages from './messages';

function Partners() {
  return (
    <AboutSection id='partners'>
      <h2>
        <FormattedMessage {...messages.partnersHeader} />
      </h2>
      <p>
        <FormattedMessage {...messages.ipsum} />
      </p>
    </AboutSection>
  );
}

Partners.propTypes = {

};

export default Partners;
