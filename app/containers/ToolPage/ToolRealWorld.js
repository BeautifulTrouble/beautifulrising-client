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
import { LearnMoreList, ToolMainContent,
        ToolMainContentHeader, RealWorldContainer, RealWorldHeader } from 'components/ToolsPageComponents';
import RealWorldItem from 'components/RealWorldItem';
import RealWorldIconImage from 'assets/images/icons/real-world.svg';

// import { makeSelectToolById } from 'containers/Tool/selectors';

import messages from './messages';

export default class ToolRealWorld extends React.Component { // eslint-disable-line react/prefer-stateless-function

  generateRealWorldList() {

    if (!this.props['real-world-examples'] || this.props['real-world-examples'].length == 0)
      return null;

    return (
      <div>
        {this.props['real-world-examples'].map((item, index)=>(<RealWorldItem key={index} pos={index%4} {...item} type={this.props.type} image={this.props.image}/>))}
      </div>
    )

  }
  render() {
    return (
      <RealWorldContainer>
        <RealWorldHeader>
          <RealWorldIcon src={RealWorldIconImage} type={this.props.type}/>
          <FormattedMessage {...messages.realWorldExamplesOf} /> "{this.props.title}"
        </RealWorldHeader>
        {this.generateRealWorldList()}
      </RealWorldContainer>
    );
  }
}
