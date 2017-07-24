/*
 *
 * ToolPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import LatinThemeProvider from 'components/LatinThemeProvider';
import AdderRemover from 'containers/Tools/AdderRemover';
import { LearnMoreList, ToolMainContent, ToolLearnMoreContent, ToolMainContentHeader } from 'components/ToolsPageComponents';
import ToolLearnMoreItem from './ToolLearnMoreItem';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from './staticText';
// import { makeSelectToolById } from 'containers/Tool/selectors';

export default function ToolLearnMore(props) { // eslint-disable-line react/prefer-stateless-function

  if (props['learn-more'] && props['learn-more'].length > 0)
    return (
      <LatinThemeProvider>
        <ToolLearnMoreContent>
          <ToolMainContentHeader>
            <TranslatableStaticText {...staticText.learnMore} />
          </ToolMainContentHeader>
          <LearnMoreList>
            {props['learn-more'].map(item=><ToolLearnMoreItem key={item.link} {...item}/>)}
          </LearnMoreList>
        </ToolLearnMoreContent>
      </LatinThemeProvider>
    );

  return null;
}
