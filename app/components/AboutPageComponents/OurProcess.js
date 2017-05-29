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
import VisibilitySensor from 'react-visibility-sensor';


function OurProcess(props) {
  return (
    <AboutSection id='process' name='process'>
      <VisibilitySensor onChange={props.onChange}>
        <h2>
          <FormattedMessage {...messages.ourProcessHeader} />
        </h2>
      </VisibilitySensor>
      <p>
        <FormattedMessage {...messages.ipsum} />
      </p>
    </AboutSection>
  );
}

OurProcess.propTypes = {

};

export default OurProcess;
