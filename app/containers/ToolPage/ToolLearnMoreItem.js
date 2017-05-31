/*
 *
 * ToolPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import AdderRemover from 'containers/Tools/AdderRemover';
import { LearnMoreItem, LearnMoreItemLink, LearnMoreItemSource } from 'components/ToolsPageComponents';
// import { makeSelectToolById } from 'containers/Tool/selectors';

import messages from './messages';

export default function ToolLearnMoreItem(props) { // eslint-disable-line react/prefer-stateless-function

  return (
    <LearnMoreItem>
      <LearnMoreItemLink to={props.link}>{props.title}</LearnMoreItemLink>
      <LearnMoreItemSource> | {props.source}</LearnMoreItemSource>
    </LearnMoreItem>
  );
}
