/**
*
* AboutPageComponents
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { PlatformsSection } from 'components/PlatformsPageComponents';
import VisibilitySensor from 'react-visibility-sensor';
import messages from './messages';

export default class PDF extends React.Component {
  render() {
    return (
      <PlatformsSection id='pdf' name='pdf'>
        <VisibilitySensor onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
          <h2>
            <FormattedMessage {...messages.pdfHeader} />
          </h2>
        </VisibilitySensor>
        <p>
          <FormattedMessage {...messages.ipsum} />
        </p>
      </PlatformsSection>
    );
  }
}
