import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import LanguageThemeProvider from 'components/LanguageThemeProvider';
import TranslatableStaticText from 'containers/TranslatableStaticText';
import { CollapsingHeader, ContentContainer } from 'components/ToolPage/Main';
import CollapsingSection from 'components/CollapsingSection';
import ContentBlock from 'components/ContentBlock';
import AskTheContributor from 'containers/AskTheContributor';
import CouldBeYou from 'components/CouldBeYou';
import Author from 'containers/Author';

import staticText from '../staticText';

class ContributedBy extends React.PureComponent {

  constructor(props) {
    super();
  }

  renderAskContributors() {
    return (<AskTheContributor
                authors={this.props.authors}
                slug={this.props.authors[0]}
                count={this.props.authors.length}
            />)
  }

  renderAuthors() {
    return this.props.authors.map(item=><Author key={item} slug={item}/>);
  }
  render() {
    if (!this.props.authors || this.props.authors.length == 0) {
      return null;
    }

    const authors = this.renderAuthors();
    const askTheAuthors = this.renderAskContributors();

    return (
      <ContentContainer>
        <LanguageThemeProvider>
          <ContentBlock>
            <CollapsingSection
              header={(
                <CollapsingHeader>
                  <TranslatableStaticText {...staticText.contributedByHeader} />
                </CollapsingHeader>
              )}
            >
            {authors}
            {askTheAuthors}
            </CollapsingSection>
          </ContentBlock>
        </LanguageThemeProvider>
      </ContentContainer>
    )
  }

}

export default ContributedBy;
