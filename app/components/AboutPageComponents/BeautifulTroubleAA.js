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

function BeautifulTroubleAA() {
  return (
    <AboutSection id='beautiful-trouble-and-action-aid'>
      <h2>
        <FormattedMessage {...messages.beautifulTroubleAAHeader} />
      </h2>
      <p>
        <FormattedMessage {...messages.ipsum} />
      </p>
    </AboutSection>
  );
}

BeautifulTroubleAA.propTypes = {

};

export default BeautifulTroubleAA;
