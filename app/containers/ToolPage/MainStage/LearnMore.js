/*
 *
 * ToolPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import LatinThemeProvider from 'components/LatinThemeProvider';
import AdderRemover from 'containers/Tools/AdderRemover';
import { LearnMoreList, ToolMainContent, ToolLearnMoreContent, ToolMainContentHeader } from 'components/ToolsPageComponents';
import ToolLearnMoreItem from 'containers/ToolPage/ToolLearnMoreItem';

import { CollapsingHeader, ContentContainer, CollapsingContent } from 'components/ToolPage/Main';
import CollapsingSection from 'components/CollapsingSection';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from '../staticText';

import makeSelectToolPage from '../selectors';
import { setChosenSection } from '../actions';
import { LEARN_MORE } from '../constants';

// import { makeSelectToolById } from 'containers/Tool/selectors';

class LearnMore extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor() {
    super();
  }

  handleClick() {

    // Set it to null if the same LEARN_MORE
    if (this.props.ToolPage.chosenSection === LEARN_MORE) {
      this.props.handleSectionClick(null);
    } else {
      this.props.handleSectionClick(LEARN_MORE);
    }

  }

  render() {
    if (!this.props['learn-more'] ||
          this.props['learn-more'] === undefined ||
          this.props['learn-more'].length === 0) {
            return null;
    }

    return (
      <CollapsingSection
        header={(
          <CollapsingHeader>
            <TranslatableStaticText {...staticText.learnMore} />
          </CollapsingHeader>
        )}

        onClick={this.handleClick.bind(this)}
        shouldOpen={
          this.props.ToolPage.expandAll ||
          this.props.ToolPage.chosenSection === LEARN_MORE
        }
      >
        <CollapsingContent>
          <LatinThemeProvider>
            <ToolLearnMoreContent>
              <LearnMoreList>
                {this.props['learn-more'].map(item=><ToolLearnMoreItem key={item.link} {...item}/>)}
              </LearnMoreList>
            </ToolLearnMoreContent>
          </LatinThemeProvider>
        </CollapsingContent>
      </CollapsingSection>
    );
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


export default connect(mapStateToProps, mapDispatchToProps)(LearnMore);
