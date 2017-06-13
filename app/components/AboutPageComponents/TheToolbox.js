/**
*
* AboutPageComponents
*
*/

import React from 'react';
// import styled from 'styled-components';
import ToolTypeAllFull from 'components/ToolTypeAllFull';
import { FormattedMessage } from 'react-intl';
import { AboutSection } from 'components/AboutPageComponents';
import VisibilitySensor from 'react-visibility-sensor';

import messages from './messages';

export default class TheToolbox extends React.Component {

  render() {
    return (
      <AboutSection id='whats-inside' name='whats-inside'>
        <VisibilitySensor  onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
          <h2>
            <FormattedMessage {...messages.theToolboxHeader} />
          </h2>
        </VisibilitySensor>
        <ToolTypeAllFull show={true} />
      </AboutSection>
    );
  }
}
