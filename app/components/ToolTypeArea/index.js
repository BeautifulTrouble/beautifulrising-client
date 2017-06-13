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

const AllContainer = styled.div`
  border: solid 3px black;
  border-width: 0 3px 3px;
  padding: 20px 60px;
`;

class ToolTypeArea extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      scrollY: 0
    }
  }

  componentWillMount() {
    const func = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.handleScroll.bind(this), true);
  }

  componentWillUnmount() {
    const func = this.handleScroll.bind(this);
    window.removeEventListener('scroll', this.handleScroll.bind(this), true);
    // window.addEventListener('scroll', this.handleScroll.bind(this), true);
  }

  handleScroll() {
    this.setState({ scrollY: window.scrollY });
  }

  render() {
    const onTop = this.state.scrollY < 10;

    if (this.props.filter !== 'type' || !this.props.label || this.props.label === undefined) {
      //All
      return (
        <AllContainer>
          <ToolTypeAllFull show={onTop} />
          <ToolTypeAllPartial show={!onTop} />
        </AllContainer>
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
