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
    this.state = {
      scrollY: 0
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    this.setState({ scrollY: window.scrollY });
  }

  render() {
    if (this.state.scrollY < 10) { // User is on top
      console.log(this.props.label, "User is on top");
      if (!this.props.label || this.props.label === undefined) {
        //All
        return (<ToolTypeAllFull />);
      } else {
        //Selected
        return (<ToolTypeSelectedFull />);
      }

    } else { // User is scrolling
      console.log(this.props.label, "User is scrolling");
      if (!this.props.label || this.props.label === undefined) {
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
