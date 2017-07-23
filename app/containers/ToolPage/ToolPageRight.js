/*
 *
 * ToolPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { makeSelectAllToolsWithSlugIndex } from 'containers/App/selectors';
import AdderRemover from 'containers/Tools/AdderRemover';
import ToolsPotentialRisk from 'containers/ToolsPotentialRisk';

import { ToolRightArea, ToolsPageRelatedToolsHeader, ToolsPageRightHeader, ToolsRelatedArea, ToolsRelatedContainer } from 'components/ToolsPageComponents';
import ToolsRelatedTool from 'components/ToolsRelatedTool';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import messages from './messages';

// import { makeSelectToolById } from 'containers/Tool/selectors';

export class ToolPageRight extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  getRelatedTactics() {
    if (!this.props.tactics || this.props.tactics.length == 0) return null;
    return (
      <ToolsRelatedContainer>
        <ToolsPageRightHeader>
          <FormattedMessage {...messages.tactics} />
        </ToolsPageRightHeader>
        <ToolsRelatedTool type={"tactic"} relatedTools={this.props.tactics} dict={this.props.toolsList}/>
      </ToolsRelatedContainer>
    )
  }

  getRelatedPrinciples() {
    if (!this.props.principles || this.props.principles.length == 0) return null;
    return (
      <ToolsRelatedContainer>
        <ToolsPageRightHeader>
          <FormattedMessage {...messages.principles} />
        </ToolsPageRightHeader>
        <ToolsRelatedTool type={"principle"} relatedTools={this.props.principles} dict={this.props.toolsList}/>
      </ToolsRelatedContainer>
    );
  }

  getRelatedTheories() {
    if (!this.props.theories || this.props.theories.length == 0) return null;
    return (
      <ToolsRelatedContainer>
        <ToolsPageRightHeader>
          <FormattedMessage {...messages.theories} />
        </ToolsPageRightHeader>
        <ToolsRelatedTool type={"theory"} relatedTools={this.props.theories} dict={this.props.toolsList}/>
      </ToolsRelatedContainer>
    );
  }

  getRelatedMethodologies() {
    if (!this.props.methodologies || this.props.methodologies.length == 0) return null;

    return(
      <ToolsRelatedContainer>
        <ToolsPageRightHeader>
          <FormattedMessage {...messages.methodologies} />
        </ToolsPageRightHeader>
        <ToolsRelatedTool type={"methodology"} relatedTools={this.props.methodologies} dict={this.props.toolsList}/>
      </ToolsRelatedContainer>
    );
  }

  getRelatedStories() {
    if (!this.props.stories || this.props.stories.length == 0) return null;
    return (
      <ToolsRelatedContainer>
        <ToolsPageRightHeader>
          <FormattedMessage {...messages.stories} />
        </ToolsPageRightHeader>
        <ToolsRelatedTool type={"story"} relatedTools={this.props.stories} dict={this.props.toolsList}/>
      </ToolsRelatedContainer>
    );
  }

  render() {
    const lang = this.props.intl.locale;
    return (
        <LanguageThemeProvider>
          <ToolRightArea lang={lang}>
            <ToolsPotentialRisk content={this.props['potential-risks']} type={this.props.type} />

            <ToolsPageRelatedToolsHeader>
              <FormattedMessage {...messages.relatedTools} />
            </ToolsPageRelatedToolsHeader>
            <ToolsRelatedArea>
              { this.getRelatedTactics() }

              { this.getRelatedPrinciples() }

              { this.getRelatedTheories() }

              { this.getRelatedMethodologies() }

              { this.getRelatedStories() }

            </ToolsRelatedArea>
          </ToolRightArea>
        </LanguageThemeProvider>
    );
  }
}

ToolPageRight.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
   toolsList: makeSelectAllToolsWithSlugIndex()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ToolPageRight));
