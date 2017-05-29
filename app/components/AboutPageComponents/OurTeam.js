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

function OurTeam() {
  return (
    <AboutSection id='team'>
      <h2>
        <FormattedMessage {...messages.ourTeamHeader} />
      </h2>
      <p>
        <FormattedMessage {...messages.ipsum} />
      </p>
    </AboutSection>
  );
}

OurTeam.propTypes = {

};

export default OurTeam;
