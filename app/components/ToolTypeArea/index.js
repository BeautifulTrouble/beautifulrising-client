/**
*
* ToolTypeArea
*
*/

import React from 'react';
import styled from 'styled-components';

import Isvg from 'react-inlinesvg';

import { FormattedMessage } from 'react-intl';
import ToolTypeAllFull from 'components/ToolTypeAllFull';
import ToolTypeAllPartial from 'components/ToolTypeAllPartial';
import ToolTypeSelectedFull from 'components/ToolTypeSelectedFull';
import ToolTypeSelectedPartial from 'components/ToolTypeSelectedPartial';
import ArrowIcon from 'assets/images/icons/arrow.svg';

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
  border: solid black;
  border-width: 0 2px 2px;
  padding: 20px 60px;
  text-align: ${props=>props.lang === 'ar' ? 'right' : 'left'};
`;

const TypeArrow = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  outline: none;
  transform: ${props=>props.lookRight ? 'rotate(270deg)' : 'rotate(180deg)'};
  display: ${props=>props.lookRight ? 'block' : 'none' };
`;

class ToolTypeArea extends React.Component { // eslint-disable-line react/prefer-stateless-function


  constructor(props) {
    super(props);
    this.windowEvent = this.handleScroll.bind(this);
    this.state = {
      scrollY: 0
    }
  }

  componentWillMount() {
    const func = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.windowEvent, false);
  }

  componentWillUnmount() {
    const func = this.handleScroll.bind(this);
    window.removeEventListener('scroll', this.windowEvent, false);
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
        <AllContainer lang={this.props.lang}>
          <ToolTypeAllFull lang={this.props.lang} show={onTop} {...this.props} />
          <ToolTypeAllPartial lang={this.props.lang} show={!onTop} {...this.props} />
          <TypeArrow lookRight={!onTop}>
            <Isvg src={ArrowIcon} />
          </TypeArrow>
        </AllContainer>
      );
    } else {
      //Selected
      return (
        <div>
          <ToolTypeSelectedFull lang={this.props.lang}  show={onTop} {...this.props}/>
          <ToolTypeSelectedPartial lang={this.props.lang} show={!onTop} {...this.props}/>
          <TypeArrow lookRight={!onTop}>
            <Isvg src={ArrowIcon} />
          </TypeArrow>
        </div>
      );
    }
  }
}

ToolTypeArea.propTypes = {
  type: React.PropTypes.string
};

export default ToolTypeArea;
