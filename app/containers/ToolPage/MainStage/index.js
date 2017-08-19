import React, { PropTypes } from 'react';
import Markdown from 'react-markdown';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { makeSelectAllToolsWithSlugIndex } from 'containers/App/selectors';

import { RouterLink } from 'utils/markdown';

import ToolKeyItems from 'containers/ToolKeyItems';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from '../staticText';

import Untranslated from './Untranslated';
import MainContent from './MainContent';
import ByLine from './ByLine';
import ContributedBy from './ContributedBy';
import RealWorld from './RealWorld';
import LearnMore from './LearnMore';
import WhyItWorked from '../Sidebar/WhyItWorked';
import WhyItFailed from '../Sidebar/WhyItFailed';
import PotentialRisk from '../Sidebar/PotentialRisk';
import RelatedTools from '../Sidebar/RelatedTools';
import Tags from '../Sidebar/Tags';
import Training from '../Sidebar/Training';

const MobileContent = styled.div`
  display: none;
  @media(max-width: 1170px) {
    display: block;
  }
`;

const ContentSeparation = styled.div`
  height: 72px;
`;
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
        <ContentSeparation />
        <MobileContent>
          <WhyItWorked collapsible={true}  {...this.props} text={this.props['why-it-worked']} />
          <WhyItFailed collapsible={true}  {...this.props} text={this.props['why-it-worked']} />
          <PotentialRisk collapsible={true} {...this.props} content={this.props['potential-risks']} type={this.props.type} />
        </MobileContent>

        <ContributedBy {...this.props} />
        {/* Show RealWorld example only on non-stories*/}
        {this.props.type !== "story" ? <RealWorld {...this.props} /> : null}
        <LearnMore {...this.props} />

        <MobileContent>
          <RelatedTools collapsible={true} {...this.props} />
          <Tags collapsible={true} {...this.props} />
          <Training collapsible={true} {...this.props} />
        </MobileContent>

      </LanguageThemeProvider>
    );
  }
}

const mapStateToProps = createStructuredSelector({
   toolsList: makeSelectAllToolsWithSlugIndex()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainStage);
