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

function OurValues(props) {
  return (
    <AboutSection id='values' name='value'>
      <VisibilitySensor onChange={props.onChange}>
        <h2>
          <FormattedMessage {...messages.ourValuesHeader} />
        </h2>
      </VisibilitySensor>
      <p>
        <FormattedMessage {...messages.ipsum} />
      </p>
    </AboutSection>
  );
}

OurValues.propTypes = {

};

export default OurValues;
