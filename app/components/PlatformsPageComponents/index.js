/**
*
* PlatformsPageComponents
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class PlatformsPageComponents extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

export const PlatformsSection = styled.div``;

PlatformsPageComponents.propTypes = {

};

export default PlatformsPageComponents;
