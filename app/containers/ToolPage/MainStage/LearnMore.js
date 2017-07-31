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
import ToolLearnMoreItem from 'containers/ToolPage/ToolLearnMoreItem';

import { CollapsingHeader, ContentContainer, CollapsingContent } from 'components/ToolPage/Main';
import CollapsingSection from 'components/CollapsingSection';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from '../staticText';
// import { makeSelectToolById } from 'containers/Tool/selectors';

export default function LearnMore(props) { // eslint-disable-line react/prefer-stateless-function
  if (!props['learn-more'] ||
        props['learn-more'] === undefined ||
        props['learn-more'].length === 0) {
          return null;
  }

  return (
    <CollapsingSection
      header={(
        <CollapsingHeader>
          <TranslatableStaticText {...staticText.learnMore} />
        </CollapsingHeader>
      )}
    >
      <CollapsingContent>
        <LatinThemeProvider>
          <ToolLearnMoreContent>
            <LearnMoreList>
              {props['learn-more'].map(item=><ToolLearnMoreItem key={item.link} {...item}/>)}
            </LearnMoreList>
          </ToolLearnMoreContent>
        </LatinThemeProvider>
      </CollapsingContent>
    </CollapsingSection>
  );

}
