/*
 *
 * ToolPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import styled, { ThemeProvider} from 'styled-components';
import CouldBeYou from 'components/CouldBeYou';
import SmallSectionHeader from 'components/SmallSectionHeader';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import ToolsRequestTraining from 'components/ToolsRequestTraining';
import Tags from 'containers/Tags';
import Author from 'containers/Author';
import AdderRemover from 'containers/Tools/AdderRemover';
import AskTheContributor from 'containers/AskTheContributor';
import { ToolLeftArea, ToolsPageLeftHeader, ToolsPageContributor } from 'components/ToolsPageComponents';
// import { makeSelectToolById } from 'containers/Tool/selectors';

import messages from './messages';

const Container = styled.div`
  margin-bottom: 30px;
`;
export class ToolPageLeft extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  renderTags() {
    if (this.props['module-type'] === 'snapshot' ) return null;
    return (
      <Container>
        <SmallSectionHeader>
          <FormattedMessage {...messages.tags} />
        </SmallSectionHeader>
        <Tags align="left" tags={this.props.tags ? this.props.tags.map(item=>item.toLowerCase()) : null} />
      </Container>
    )
  }

  renderAskContributors() {
    return (
      <Container>
        <AskTheContributor slug={this.props.authors[0]} count={this.props.authors.length}/>
      </Container>
    )
  }

  render() {
    const lang = this.props.intl.locale;
    return (
        <LanguageThemeProvider>
          <ToolLeftArea>
            <ToolsPageContributor>
              <FormattedMessage {...messages.contributedByHeader} />
            </ToolsPageContributor>
            { this.props.authors && this.props.authors.length > 0 ?
                this.props.authors.map(item=><Author key={item} slug={item}/>) :
                <CouldBeYou /> }
            { this.props.authors ?
                this.renderAskContributors() :
                null }

            { this.renderTags() }
            <Container>
              <SmallSectionHeader>
                <FormattedMessage {...messages.trainingHeader} />
              </SmallSectionHeader>
              <ToolsRequestTraining />
            </Container>
          </ToolLeftArea>
        </LanguageThemeProvider>
    );
  }
}

ToolPageLeft.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(null, mapDispatchToProps)(injectIntl(ToolPageLeft));
