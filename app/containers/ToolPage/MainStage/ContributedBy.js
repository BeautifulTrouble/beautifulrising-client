import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import TranslatableStaticText from 'containers/TranslatableStaticText';
import { CollapsingHeader, ContentContainer, CollapsingContent } from 'components/ToolPage/Main';
import CollapsingSection from 'components/CollapsingSection';
import ContentBlock from 'components/ContentBlock';
import AskTheContributor from 'containers/AskTheContributor';
import CouldBeYou from 'components/CouldBeYou';
import Author from 'containers/Author';
import makeSelectToolPage from '../selectors';
import { setChosenSection } from '../actions';
import { CONTRIBUTED_BY } from '../constants';
import staticText from '../staticText';


const FirstCollapsingHeader = styled(CollapsingHeader)`
  @media(max-width: 1320px) {
  }
  @media(max-width: 970px) {
    margin-top: 0;
  }
`;

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

  handleClick() {

    // Set it to null if the same CONTRIBUTED_BY
    if (this.props.ToolPage.chosenSection === CONTRIBUTED_BY) {
      this.props.handleSectionClick(null);
    } else {
      this.props.handleSectionClick(CONTRIBUTED_BY);
    }

  }

  render() {
    if (!this.props.authors || this.props.authors.length == 0) {
      return null;
    }

    const authors = this.renderAuthors();
    const askTheAuthors = this.renderAskContributors();
    const contribText = this.props.authors && this.props.authors.length > 1 ?
                            staticText.contributedByHeaderPlural :
                            staticText.contributedByHeader;

    return (
      <ContentContainer>
        <LanguageThemeProvider>
          <ContentBlock>
            <CollapsingSection
              onClick={this.handleClick.bind(this)}
              header={(
                <FirstCollapsingHeader>
                  <TranslatableStaticText {...contribText} />
                </FirstCollapsingHeader>
              )}

              shouldOpen={
                this.props.ToolPage.expandAll ||
                this.props.ToolPage.chosenSection === CONTRIBUTED_BY
              }
            >
              <CollapsingContent>
                {authors}
                {askTheAuthors}
              </CollapsingContent>
            </CollapsingSection>
          </ContentBlock>
        </LanguageThemeProvider>
      </ContentContainer>
    )
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


export default connect(mapStateToProps, mapDispatchToProps)(ContributedBy);
