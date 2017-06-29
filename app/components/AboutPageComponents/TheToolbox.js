/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled from 'styled-components';
import Markdown from 'react-remarkable';
import ToolTypeAllFull from 'components/ToolTypeAllFull';
import { FormattedMessage, injectIntl } from 'react-intl';
import { AboutSection, Introduction, IntroText } from 'components/AboutPageComponents';
import VisibilitySensor from 'react-visibility-sensor';

import messages from './messages';

export class TheToolbox extends React.Component {

  renderHeader() {
    return(
      <VisibilitySensor  onChange={(isVisible) => this.props.onChange(isVisible, this.props.targetRoute)}>
        <div>
          <h2>
            <FormattedMessage {...messages.theToolboxHeader} />
          </h2>
        </div>
      </VisibilitySensor>
    );
  }
  render() {
    const lang = this.props.intl.locale;
    return (
      <AboutSection id='whats-inside' name='whats-inside' lang={lang} hideHeader={this.props.hideHeader}>
        { this.props.hideHeader ? null : this.renderHeader() }
        <Introduction>
          <IntroText>
            <Markdown source={this.props.whatsInside}/>
          </IntroText>
        </Introduction>
        <ToolTypeAllFull show={true} showLine={false}/>
      </AboutSection>
    );
  }
}


export default injectIntl(TheToolbox);
