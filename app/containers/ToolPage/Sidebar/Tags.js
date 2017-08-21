import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Markdown from 'react-markdown';
import { injectIntl } from 'react-intl';

import { RouterLink } from 'utils/markdown';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import {Header, SidebarContent} from 'components/ToolPage/Sidebar';
import TagsContent from 'containers/Tags';

import {createStructuredSelector} from 'reselect';
import { connect } from 'react-redux';
import { CollapsingHeader, ContentContainer, CollapsingContent } from 'components/ToolPage/Main';
import CollapsingSection from 'components/CollapsingSection';

import staticText from '../staticText';

import makeSelectToolPage from '../selectors';
import { setChosenSection } from '../actions';
import { TAGS } from '../constants';

class Tags extends React.PureComponent {
  constructor(props) {
    super();
  }

  renderSidebar() {
    const lang = this.props.intl.locale;
    return (
      <LanguageThemeProvider>
        <SidebarContent>
          <Header>
            <TranslatableStaticText {...staticText.tags} />
          </Header>
          <TagsContent
              align={lang == 'ar' ? "right" : "left"}
              tags={this.props.tags ?
                      this.props.tags.map(item=>item.toLowerCase()) : null}
          />
        </SidebarContent>
      </LanguageThemeProvider>
    );
  }

  handleClick() {
    // Set it to null if the same LEARN_MORE
    if (this.props.ToolPage.chosenSection === TAGS) {
      this.props.handleSectionClick(null);
    } else {
      this.props.handleSectionClick(TAGS);
    }
  }

  renderCollapsible()  {
    const lang = this.props.intl.locale;
    return (
      <CollapsingSection
        header={(
          <CollapsingHeader>
            <TranslatableStaticText {...staticText.tags} />
          </CollapsingHeader>
        )}

        onClick={this.handleClick.bind(this)}
        shouldOpen={
          this.props.ToolPage.expandAll ||
          this.props.ToolPage.chosenSection === TAGS
        }
      >
        <CollapsingContent>
          <LanguageThemeProvider>
            <TagsContent
                align={lang == 'ar' ? "right" : "left"}
                tags={this.props.tags ?
                        this.props.tags.map(item=>item.toLowerCase()) : null}
            />
          </LanguageThemeProvider>
        </CollapsingContent>
      </CollapsingSection>
    );
  }

  render() {
    return this.props.collapsible ? this.renderCollapsible() : this.renderSidebar();
  }
}

Tags.propTypes = {
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


export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Tags));
