/**
*
* AboutPageComponents
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { AboutSection } from 'components/AboutPageComponents';
import VisibilitySensor from 'react-visibility-sensor';

import messages from './messages';

function TheToolbox(props) {
  return (
    <AboutSection id='whats-inside' name='whats-inside'>
      <VisibilitySensor  onChange={props.onChange}>
        <h2>
          <FormattedMessage {...messages.theToolboxHeader} />
        </h2>
      </VisibilitySensor>
      <p>
        <FormattedMessage {...messages.ipsum} />
      </p>
    </AboutSection>
  );
}

TheToolbox.propTypes = {

};

export default TheToolbox;
