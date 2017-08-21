import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Markdown from 'react-markdown';
import { injectIntl } from 'react-intl';
import Isvg from 'react-inlinesvg';
import { RouterLink } from 'utils/markdown';
import TranslatableStaticText from 'containers/TranslatableStaticText';

import {createStructuredSelector} from 'reselect';
import { connect } from 'react-redux';
import { CollapsingHeader, ContentContainer, CollapsingContent } from 'components/ToolPage/Main';
import CollapsingSection from 'components/CollapsingSection';

import { PotentialRiskIcon } from 'components/ToolsComponents';
import WhyItWorkedIcon from 'assets/images/icons/stories-whyitworked.svg';

import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

import { BigHeader,
          SidebarContent,
          RelatedHeader,
          WhyItIcon} from 'components/ToolPage/Sidebar';


import staticText from '../staticText';

import makeSelectToolPage from '../selectors';
import { setChosenSection } from '../actions';
import { WHY_IT_WORKED, PROP_WHY_IT_WORKED } from '../constants';

class WhyItWorked extends React.PureComponent {

  constructor() {
    super();
  }

  handleClick() {
    // Set it to null if the same LEARN_MORE
    if (this.props.ToolPage.chosenSection === WHY_IT_WORKED) {
      this.props.handleSectionClick(null);
    } else {
      this.props.handleSectionClick(WHY_IT_WORKED);
    }
  }

  renderSidebar() {
    return (
      <LanguageThemeProvider>
        <SidebarContent>
          <BigHeader>
            <WhyItIcon>
              <Isvg src={WhyItWorkedIcon} />
            </WhyItIcon>
            <TranslatableStaticText {...staticText.whyItWorkedHeader} />
          </BigHeader>
          <ContentBlock>
            <Markdown source={this.props.text} renderers={{Link: RouterLink}} />
          </ContentBlock>
        </SidebarContent>
      </LanguageThemeProvider>
    );
  }

    renderCollapsible() {
      return (
        <CollapsingSection
          header={(
            <CollapsingHeader>
              <TranslatableStaticText {...staticText.whyItWorkedHeader} />
            </CollapsingHeader>
          )}

          onClick={this.handleClick.bind(this)}
          shouldOpen={
            this.props.ToolPage.expandAll ||
            this.props.ToolPage.chosenSection === WHY_IT_WORKED
          }
        >
          <CollapsingContent>
            <LanguageThemeProvider>
              <ContentBlock>
                <Markdown source={this.props.text} renderers={{Link: RouterLink}} />
              </ContentBlock>
            </LanguageThemeProvider>
          </CollapsingContent>
        </CollapsingSection>
      );
    }

  render() {
    if( !this.props.showIfUntranslated(PROP_WHY_IT_WORKED) ) {
      return null;
    }

    if (!this.props.text || this.props.text.trim().length == 0) return null;
    return this.props.collapsible ? this.renderCollapsible() : this.renderSidebar()
  }

}

WhyItWorked.propTypes = {
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


export default connect(mapStateToProps, mapDispatchToProps)(WhyItWorked);
