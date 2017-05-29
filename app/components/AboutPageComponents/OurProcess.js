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


export default class OurProcess extends React.Component {
  render() {
    return (
      <AboutSection id='process' name='process'>
        <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
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
}
