import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Markdown from 'react-markdown';
import { injectIntl } from 'react-intl';

import { RouterLink } from 'utils/markdown';
import TranslatableStaticText from 'containers/TranslatableStaticText';

import {createStructuredSelector} from 'reselect';
import { connect } from 'react-redux';
import { CollapsingHeader, ContentContainer, CollapsingContent } from 'components/ToolPage/Main';
import CollapsingSection from 'components/CollapsingSection';

import { PotentialRiskIcon } from 'components/ToolsComponents';
import PotentialRiskIconImage from 'assets/images/icons/potential-risk.svg';

import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import Container from 'components/ToolsPotentialRisk/Container';
import HeaderName from 'components/ToolsPotentialRisk/HeaderName';
import Header from 'components/ToolsPotentialRisk/Header';
import staticText from '../staticText';
import SidebarContent from 'components/ToolPage/Sidebar/SidebarContent';

import makeSelectToolPage from '../selectors';
import { setChosenSection } from '../actions';
import { POTENTIAL_RISK, PROP_POTENTIAL_RISK } from '../constants';

class PotentialRisk extends React.PureComponent {

  constructor() {
    super()
  }

  handleClick() {
    // Set it to null if the same LEARN_MORE
    if (this.props.ToolPage.chosenSection === POTENTIAL_RISK) {
      this.props.handleSectionClick(null);
    } else {
      this.props.handleSectionClick(POTENTIAL_RISK);
    }
  }

  renderCollapsible() {
    return (
      <CollapsingSection
        header={(
          <CollapsingHeader>
            <TranslatableStaticText {...staticText.potentialRiskHeader} />
          </CollapsingHeader>
        )}

        onClick={this.handleClick.bind(this)}
        shouldOpen={
          this.props.ToolPage.expandAll ||
          this.props.ToolPage.chosenSection === POTENTIAL_RISK
        }
      >
        <CollapsingContent>
          <LanguageThemeProvider>
            <ContentBlock>
              <Markdown source={this.props.content} renderers={{Link: RouterLink}} />
            </ContentBlock>
          </LanguageThemeProvider>
        </CollapsingContent>
      </CollapsingSection>
    );
  }
  renderSidebar() {
    const lang = this.props.intl.locale;
    return (
      <LanguageThemeProvider>
        <Container>
          <div>
            <Header >
              <PotentialRiskIcon src={PotentialRiskIconImage} lang={lang} type={this.props.type} />
              <HeaderName>
                <TranslatableStaticText {...staticText.potentialRiskHeader} />
              </HeaderName>
            </Header>
            <ContentBlock>
              <Markdown source={this.props.content} renderers={{Link: RouterLink}} />
            </ContentBlock>
          </div>
        </Container>
      </LanguageThemeProvider>
    );
  }

  render() {
    if( !this.props.showIfUntranslated(PROP_POTENTIAL_RISK) ) {
      return null;
    }

    if (!this.props.content || this.props.content.trim().length == 0) return null;

    return this.props.collapsible ? this.renderCollapsible() : this.renderSidebar();
  }

}

PotentialRisk.propTypes = {
  content: React.PropTypes.string,
  type: React.PropTypes.string.isRequired
};

const mapStateToProps = createStructuredSelector({
  ToolPage: makeSelectToolPage()
});

function mapDispatchToProps(dispatch) {
  return {
    handleSectionClick: (chosenSection) => {
      dispatch(setChosenSection(chosenSection));
    }
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(PotentialRisk));
