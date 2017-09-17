/*
 *
 * ToolPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Markdown from 'react-remarkable';
import ContentBlock from 'components/ContentBlock';
import LatinThemeProvider from 'components/LatinThemeProvider';
import AdderRemover from 'containers/Tools/AdderRemover';
import { LearnMoreItem, LearnMoreItemLink, LearnMoreItemSource } from 'components/ToolsPageComponents';
// import { makeSelectToolById } from 'containers/Tool/selectors';

import messages from './messages';

export default function ToolLearnMoreItem(props) { // eslint-disable-line react/prefer-stateless-function
  return (
    <LatinThemeProvider>
      <LearnMoreItem>
        <ContentBlock>
          <LearnMoreItemLink href={props.link} target='_blank'>{props.title}</LearnMoreItemLink>
          {props.source !== '' ? (<LearnMoreItemSource> | <Markdown className={'markdown'} source={props.source} /> </LearnMoreItemSource>) : null }
          {props.year ? `, ${props.year}` : ''}
        </ContentBlock>
      </LearnMoreItem>
    </LatinThemeProvider>
  );
}
