import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Markdown from 'react-markdown';
import { injectIntl } from 'react-intl';

import { RouterLink } from 'utils/markdown';

import {createStructuredSelector} from 'reselect';
import { connect } from 'react-redux';
import { CollapsingHeader, ContentContainer, CollapsingContent } from 'components/ToolPage/Main';
import CollapsingSection from 'components/CollapsingSection';

import TranslatableStaticText, { injectStaticText } from 'containers/TranslatableStaticText';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import {Header, SidebarContent} from 'components/ToolPage/Sidebar';

import staticText from '../staticText';

import makeSelectToolPage from '../selectors';
import { setChosenSection } from '../actions';
import { TRAINING } from '../constants';

class Training extends React.PureComponent {
  constructor(props) {
    super();
  }

  handleClick() {
    // Set it to null if the same LEARN_MORE
    if (this.props.ToolPage.chosenSection === TRAINING) {
      this.props.handleSectionClick(null);
    } else {
      this.props.handleSectionClick(TRAINING);
    }
  }

  renderCollapsible() {
    const lang = this.props.intl.locale;
    const {buildMessage} = this.props.translatable;
    const formLink = buildMessage(staticText.trainingForm);
    const requestMarkdown = buildMessage(staticText.trainingRequest, {form: formLink});

    return (
      <CollapsingSection
        header={(
          <CollapsingHeader>
            <TranslatableStaticText {...staticText.trainingHeader} />
          </CollapsingHeader>
        )}

        onClick={this.handleClick.bind(this)}
        shouldOpen={
          this.props.ToolPage.expandAll ||
          this.props.ToolPage.chosenSection === TRAINING
        }
      >
        <CollapsingContent>
          <LanguageThemeProvider>
            <ContentBlock>
              <Markdown
                source={requestMarkdown}
                renderers={{Link: RouterLink}}
              />
            </ContentBlock>
          </LanguageThemeProvider>
        </CollapsingContent>
      </CollapsingSection>
    );
  }

  renderSidebar() {
    const lang = this.props.intl.locale;
    const {buildMessage} = this.props.translatable;
    const formLink = buildMessage(staticText.trainingForm);
    const requestMarkdown = buildMessage(staticText.trainingRequest, {form: formLink});

    return (
      <LanguageThemeProvider>
        <SidebarContent>
          <Header>
            <TranslatableStaticText {...staticText.trainingHeader} />
          </Header>
          <ContentBlock>
            <Markdown
              source={requestMarkdown}
              renderers={{Link: RouterLink}}
            />
          </ContentBlock>
        </SidebarContent>
      </LanguageThemeProvider>
    );
  }
  render() {
    return this.props.collapsible ? this.renderCollapsible() : this.renderSidebar()
  }
}

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


export default connect(mapStateToProps, mapDispatchToProps)(injectStaticText(injectIntl(Training)));
