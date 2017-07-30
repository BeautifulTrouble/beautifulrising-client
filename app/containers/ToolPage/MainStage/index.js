import React, { PropTypes } from 'react';
import Markdown from 'react-markdown';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RouterLink } from 'utils/markdown';

import ToolKeyItems from 'containers/ToolKeyItems';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from '../staticText';

import Untranslated from './Untranslated';
import MainContent from './MainContent';
import ByLine from './ByLine';
import ContributedBy from './ContributedBy';

class MainStage extends React.PureComponent {
  constructor(props) {
    super();
  }

  render() {
    return (
      <LanguageThemeProvider>
        <ByLine {...this.props} />
        <Untranslated { ...this.props} />
        <MainContent { ...this.props } />
        <ToolKeyItems {...this.props} />
        <ContributedBy {...this.props} />
      </LanguageThemeProvider>
    );
  }
}

export default MainStage;
