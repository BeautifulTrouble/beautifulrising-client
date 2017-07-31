import React, { PropTypes } from 'react';
import Markdown from 'react-markdown';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RouterLink } from 'utils/markdown';

import LanguageThemeProvider from 'components/LanguageThemeProvider';
import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from '../staticText';

import { ContentContainer } from 'components/ToolPage/Main';

import PotentialRisk from './PotentialRisk';

class Sidebar extends React.PureComponent {
  constructor(props) {
    super();
  }

  render() {
    console.log("Sidebar", this.props);
    return (
      <LanguageThemeProvider>
        <PotentialRisk content={this.props['potential-risks']} type={this.props.type} />
      </LanguageThemeProvider>
    );
  }
}

export default Sidebar;
