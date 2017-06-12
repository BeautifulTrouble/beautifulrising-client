/**
*
* ToolTypeArea
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import ToolTypeAllFull from 'components/ToolTypeAllFull';
import ToolTypeAllPartial from 'components/ToolTypeAllPartial';
import ToolTypeSelectedFull from 'components/ToolTypeSelectedFull';
import ToolTypeSelectedPartial from 'components/ToolTypeSelectedPartial';

import messages from './messages';

/*
  There are four types of views:
  Window scroll is 0
  - Full views
  - Type is chosen

  Window scroll is > 0
  - Full views
  - Type is chosen
*/

class ToolTypeArea extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
  }

  render() {
    if (window.scrollTop < 10) { // User is on top
      console.log(window.scrollTop, "User is on top");
      if (!this.props.type) {
        //All
        return (<ToolTypeAllFull />);
      } else {
        //Selected
        return (<ToolTypeSelectedFull />);
      }

    } else { // User is scrolling
      console.log("User is scrolling");
      if (window.scrollTop, !this.props.type) {
        //All
        return (<ToolTypeAllPartial />);
      } else {
        //Selected
        return (<ToolTypeSelectedPartial />);
      }
    }
  }
}

ToolTypeArea.propTypes = {
  type: React.PropTypes.string
};

export default ToolTypeArea;
