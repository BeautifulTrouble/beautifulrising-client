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

function OurAdvisoryNetwork() {
  return (
    <AboutSection id='advisory-network'>
      <h2>
        <FormattedMessage {...messages.ourAdvisoryNetworkHeader} />
      </h2>
      <p>
        <FormattedMessage {...messages.ipsum} />
      </p>
    </AboutSection>
  );
}

OurAdvisoryNetwork.propTypes = {

};

export default OurAdvisoryNetwork;
