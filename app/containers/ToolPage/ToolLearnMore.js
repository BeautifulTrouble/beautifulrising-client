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
import { LearnMoreList, ToolMainContent, ToolMainContentHeader } from 'components/ToolsPageComponents';
import ToolLearnMoreItem from './ToolLearnMoreItem';
// import { makeSelectToolById } from 'containers/Tool/selectors';

import messages from './messages';

export default function ToolLearnMore(props) { // eslint-disable-line react/prefer-stateless-function
  console.log(props);
  if (props['learn-more'] && props['learn-more'].length > 0)
    return (
      <ToolMainContent>
        <ToolMainContentHeader>
          <FormattedMessage {...messages.learnMore} />
        </ToolMainContentHeader>
        <LearnMoreList>
          {props['learn-more'].map(item=><ToolLearnMoreItem key={item.link} {...item}/>)}
        </LearnMoreList>
      </ToolMainContent>
    );

  return null;
}
