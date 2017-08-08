import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Markdown from 'react-markdown';
import { injectIntl } from 'react-intl';
import Isvg from 'react-inlinesvg';

import { RouterLink } from 'utils/markdown';

import {createStructuredSelector} from 'reselect';
import { connect } from 'react-redux';
import { CollapsingHeader, ContentContainer, CollapsingContent } from 'components/ToolPage/Main';
import CollapsingSection from 'components/CollapsingSection';

import MethodologiesFlag from 'assets/images/flag/relatedtools-methodologies.svg';
import PrinciplesFlag from 'assets/images/flag/relatedtools-principles.svg';
import StoriesFlag from 'assets/images/flag/relatedtools-stories.svg';
import TacticsFlag from 'assets/images/flag/relatedtools-tactics.svg';
import TheoriesFlag from 'assets/images/flag/relatedtools-theories.svg';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import { Header,
          SidebarContent,
          RelatedHeader} from 'components/ToolPage/Sidebar';

import RelatedToolsList from './RelatedToolsList';

import staticText from '../staticText';

import makeSelectToolPage from '../selectors';
import { setChosenSection } from '../actions';
import { RELATED_TOOLS } from '../constants';

class RelatedTools extends React.PureComponent {
  constructor(props) {
    super();
  }

  handleClick() {
    // Set it to null if the same LEARN_MORE
    if (this.props.ToolPage.chosenSection === RELATED_TOOLS) {
      this.props.handleSectionClick(null);
    } else {
      this.props.handleSectionClick(RELATED_TOOLS);
    }
  }

  renderRelated(FlagImage, typeKey) {
    
    if (!this.props[typeKey] || this.props[typeKey].length == 0) return null;
    return (
      <ContentBlock>
        <RelatedHeader>
          <Isvg src={FlagImage} />
        </RelatedHeader>
        <RelatedToolsList relatedTools={this.props[typeKey]} dict={this.props.toolsList}/>
      </ContentBlock>
    );
  }

  renderCollapsible() {
    return (
      <CollapsingSection
        header={(
          <CollapsingHeader>
            <TranslatableStaticText {...staticText.relatedTools} />
          </CollapsingHeader>
        )}

        onClick={this.handleClick.bind(this)}
        shouldOpen={
          this.props.ToolPage.expandAll ||
          this.props.ToolPage.chosenSection === RELATED_TOOLS
        }
      >
        <CollapsingContent>
          <LanguageThemeProvider>
            <ContentBlock>
              {this.renderRelated(TacticsFlag, "tactics")}
              {this.renderRelated(PrinciplesFlag, "principles")}
              {this.renderRelated(TheoriesFlag, "theories")}
              {this.renderRelated(MethodologiesFlag, "methodologies")}
              {this.renderRelated(StoriesFlag, "stories")}
            </ContentBlock>
          </LanguageThemeProvider>
        </CollapsingContent>
      </CollapsingSection>
    );
  }

  renderSidebar() {
    return (
      <LanguageThemeProvider>
        <SidebarContent>
          <Header>
            <TranslatableStaticText {...staticText.relatedTools} />
          </Header>
          {this.renderRelated(TacticsFlag, "tactics")}
          {this.renderRelated(PrinciplesFlag, "principles")}
          {this.renderRelated(TheoriesFlag, "theories")}
          {this.renderRelated(MethodologiesFlag, "methodologies")}
          {this.renderRelated(StoriesFlag, "stories")}
        </SidebarContent>
      </LanguageThemeProvider>
    );
  }

  render() {

    return this.props.collapsible ? this.renderCollapsible() : this.renderSidebar();

  }
}

RelatedTools.propTypes = {
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


export default connect(mapStateToProps, mapDispatchToProps)(RelatedTools);
