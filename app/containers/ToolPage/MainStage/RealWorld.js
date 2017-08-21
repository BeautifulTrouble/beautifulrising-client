/*
 *
 * ToolPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Isvg from 'react-inlinesvg';
import styled, { ThemeProvider } from 'styled-components';

import { RealWorldIcon } from 'components/ToolsComponents';
import LatinThemeProvider from 'components/LatinThemeProvider';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import { LearnMoreList, ToolMainContent,
        ToolMainContentHeader, RealWorldContainer,
        RealWorldHeader, RealWorldToggle, RealWorldItems } from 'components/ToolsPageComponents';
import SubmitRealWorldExample from 'containers/SubmitRealWorldExample';
import RealWorldItem from 'components/RealWorldItem';

import RealWorldIconImage from 'assets/images/icons/real-world.svg';
import ArrowIcon from 'assets/images/icons/arrow.svg';

import { CollapsingHeader, ContentContainer, CollapsingContent } from 'components/ToolPage/Main';
import CollapsingSection from 'components/CollapsingSection';
import ContentBlock from 'components/ContentBlock';

// import { makeSelectToolById } from 'containers/Tool/selectors';

import TranslatableStaticText from 'containers/TranslatableStaticText';

import makeSelectToolPage from '../selectors';
import { setChosenSection } from '../actions';
import { REAL_WORLD_EXAMPLE } from '../constants';

import staticText from '../staticText';

class RealWorld extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true
    }
  }
  generateRealWorldList() {

    if (!this.props['real-world-examples']
        || this.props['real-world-examples'].length == 0)
      return null;

    return (
      <div>
        {this.props['real-world-examples'].map((item, index)=>(<RealWorldItem key={index} pos={index} {...item} type={this.props.type} toolImage={this.props.image}/>))}
      </div>
    )

  }

  handleClick() {

    // Set it to null if the same REAL_WORLD_EXAMPLE
    if (this.props.ToolPage.chosenSection === REAL_WORLD_EXAMPLE) {
      this.props.handleSectionClick(null);
    } else {
      this.props.handleSectionClick(REAL_WORLD_EXAMPLE);
    }

  }

  render() {
    (this.props.ToolPage);
    return (

        <CollapsingSection
          isShown={true}
          onClick={this.handleClick.bind(this)}
          shouldOpen={
            this.props.ToolPage.expandAll ||
            this.props.ToolPage.chosenSection === REAL_WORLD_EXAMPLE
          }
          header={(
              <CollapsingHeader>
                <TranslatableStaticText {...staticText.realWorldHeader} values={{title: this.props.title}}/>
              </CollapsingHeader>)}>
          <CollapsingContent>
            <LatinThemeProvider>
              <RealWorldItems show={this.state.isCollapsed}>
                {this.generateRealWorldList()}
                <SubmitRealWorldExample {...this.props} />
              </RealWorldItems>
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


export default connect(mapStateToProps, mapDispatchToProps)(RealWorld);
