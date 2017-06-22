/*
 *
 * ToolPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { RealWorldIcon } from 'components/ToolsComponents';
import Isvg from 'react-inlinesvg';
import { LearnMoreList, ToolMainContent,
        ToolMainContentHeader, RealWorldContainer,
        RealWorldHeader, RealWorldToggle, RealWorldItems } from 'components/ToolsPageComponents';
import SubmitRealWorldExample from 'containers/SubmitRealWorldExample';
import RealWorldItem from 'components/RealWorldItem';
import RealWorldIconImage from 'assets/images/icons/real-world.svg';
import ArrowIcon from 'assets/images/icons/arrow.svg';

// import { makeSelectToolById } from 'containers/Tool/selectors';

import messages from './messages';

export default class ToolRealWorld extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true
    }
  }

  handleCollapseClick(evt) {
      this.setState({ isCollapsed: !this.state.isCollapsed });
  }

  generateRealWorldList() {

    if (!this.props['real-world-examples']
        || this.props['real-world-examples'].length == 0)
      return null;

    return (
      <div show={this.state.isCollapsed}>
        {this.props['real-world-examples'].map((item, index)=>(<RealWorldItem key={index} pos={index} {...item} type={this.props.type} toolImage={this.props.image}/>))}
      </div>
    )

  }
  render() {
    return (
      <RealWorldContainer>
        <RealWorldHeader>
          <RealWorldIcon src={RealWorldIconImage} type={this.props.type}/>
          <FormattedMessage {...messages.realWorldExamplesOf} values={{title: this.props.title}}/>
          <RealWorldToggle collapsed={this.state.isCollapsed} onClick={this.handleCollapseClick.bind(this)}>
            <Isvg src={ArrowIcon} />
          </RealWorldToggle>
        </RealWorldHeader>
        <RealWorldItems show={this.state.isCollapsed}>
          {this.generateRealWorldList()}
          <SubmitRealWorldExample {...this.props} />
        </RealWorldItems>
      </RealWorldContainer>
    );
  }
}
