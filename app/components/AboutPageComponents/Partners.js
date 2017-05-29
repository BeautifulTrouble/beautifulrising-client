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

export default class Partners extends React.Component {
  render() {
    return (
      <AboutSection id='partners'>
        <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
          <h2>
            <FormattedMessage {...messages.partnersHeader} />
          </h2>
        </VisibilitySensor>
        <p>
          <FormattedMessage {...messages.ipsum} />
        </p>
      </AboutSection>
    );
  }
}
