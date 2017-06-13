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

  componentWillMount() {
    console.log("Mounting");
    const func = this.handleScroll.bind(this);
    console.log(func);
    window.addEventListener('scroll', func, false);
  }

  componentWillUnmount() {
    console.log("Unmounting");
    const func = this.handleScroll.bind(this);
    console.log(func);
    // window.removeEventListener('scroll', func, false);
    window.addEventListener('scroll', null, false);
  }

  handleScroll() {
    this.setState({ scrollY: window.scrollY });
  }

  render() {
    const onTop = this.state.scrollY < 10;

    if (this.props.filter !== 'type' || !this.props.label || this.props.label === undefined) {
      //All
      return (
          <div>
            <ToolTypeAllFull show={onTop} />
            <ToolTypeAllPartial show={!onTop} />
          </div>
      );
    } else {
      //Selected
      return (
        <div>
          <ToolTypeSelectedFull show={onTop} label={this.props.label} />
          <ToolTypeSelectedPartial show={!onTop} label={this.props.label} />
        </div>
      );
    }
  }
}

ToolTypeArea.propTypes = {
  type: React.PropTypes.string
};

export default ToolTypeArea;
