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

export default class BeautifulTroubleAA extends React.Component {
  render() {
    return (
      <AboutSection id='beautiful-trouble-and-action-aid'>
        <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
          <h2>
            <FormattedMessage {...messages.beautifulTroubleAAHeader} />
          </h2>
        </VisibilitySensor>
        <p>
          <FormattedMessage {...messages.ipsum} />
        </p>
      </AboutSection>
    );

  }
}
