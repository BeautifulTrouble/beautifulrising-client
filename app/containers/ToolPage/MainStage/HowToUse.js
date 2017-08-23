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

import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';

import { BigHeader,
          SidebarContent,
          RelatedHeader,
          WhyItIcon} from 'components/ToolPage/Sidebar';


import staticText from '../staticText';

import makeSelectToolPage from '../selectors';
import { setChosenSection } from '../actions';
import { HOW_TO_USE, PROP_HOW_TO_USE } from '../constants';

class HowToUse extends React.PureComponent {

  constructor() {
    super();
  }

  handleClick() {
    // Set it to null if the same LEARN_MORE
    if (this.props.ToolPage.chosenSection === HOW_TO_USE) {
      this.props.handleSectionClick(null);
    } else {
      this.props.handleSectionClick(HOW_TO_USE);
    }
  }

    renderCollapsible() {

      const imageReplaced = this.props[PROP_HOW_TO_USE].replace(/\(([^()]*?)\.jpg\)/g,"(https://www.beautifulrising.org/$1.jpg)");

      return (
        <CollapsingSection
          header={(
            <CollapsingHeader>
              <TranslatableStaticText {...staticText.howToUseHeader} />
            </CollapsingHeader>
          )}

          onClick={this.handleClick.bind(this)}
          shouldOpen={
            this.props.ToolPage.expandAll ||
            this.props.ToolPage.chosenSection === HOW_TO_USE
          }
        >
          <CollapsingContent>
            <LanguageThemeProvider>
              <ContentBlock>
                <Markdown source={imageReplaced} renderers={{Link: RouterLink}} />
              </ContentBlock>
            </LanguageThemeProvider>
          </CollapsingContent>
        </CollapsingSection>
      );
    }

  render() {
    if( !this.props.showIfUntranslated(PROP_HOW_TO_USE) ) {
      return null;
    }

    if (!this.props[PROP_HOW_TO_USE] || this.props[PROP_HOW_TO_USE] === undefined || this.props[PROP_HOW_TO_USE] === '')
      return null;

    return this.renderCollapsible()
  }

}

HowToUse.propTypes = {
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


export default connect(mapStateToProps, mapDispatchToProps)(HowToUse);
