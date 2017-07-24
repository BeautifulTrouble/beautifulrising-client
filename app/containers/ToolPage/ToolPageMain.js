/*
 *
 * ToolPage
 *
 */

import React, { PropTypes } from 'react';
import Markdown from 'react-markdown';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { RouterLink } from 'utils/markdown';
import ToolSnapshotArea from 'containers/ToolSnapshotArea';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import AdderRemover from 'containers/Tools/AdderRemover';
import { BorderedButton } from 'components/CommonComponents';
import { ToolMainArea,
         ToolMainContent,
         ToolReadShortContent,
         ToolReadFullContent } from 'components/ToolsPageComponents';



import ToolHowToUse from 'containers/ToolHowToUse';
import ToolWhyItWorked from 'containers/ToolWhyItWorked';
import ToolWhyItFailed from 'containers/ToolWhyItFailed';
import ToolKeyItems from 'containers/ToolKeyItems';
import ToolEpigraph from 'components/ToolEpigraph';
import ToolWithPullQuote from 'components/ToolWithPullQuote';
// import { makeSelectToolById } from 'containers/Tool/selectors';
import ToolLearnMore from './ToolLearnMore';
import ToolRealWorld from './ToolRealWorld';
import ToolUntranslated from './ToolUntranslated';
import { PROP_FULL_WRITE_UP, PROP_SHORT_WRITE_UP } from './constants';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from './staticText';


export class ToolPageMain extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      showFull: false
    }
  }

  componentWillReceiveProps(nextProps) {
    //Refresh if label is different
    if (nextProps.params.label !== this.props.params.label) {
      this.setState({ showFull: false });
    }
  }

  handleShowClick() {
    this.setState({ showFull : !this.state.showFull })
  }
  generateShortContent() {
    if (!this.props[PROP_SHORT_WRITE_UP] ) return null;
    return(
      <ToolReadShortContent>
        <Markdown
          source={this.props[PROP_SHORT_WRITE_UP].replace(/\(([^()]*?)\.jpg\)/g,"(https://www.beautifulrising.org/$1.jpg)") }
          renderers={{Link: RouterLink}}
        />
      </ToolReadShortContent>
    );
  }

  renderWithPullQuote(content) {
    const split = content.split('\n').filter(item => item !== "");
    return (<ToolWithPullQuote content={split} pullQuote={this.props['pull-quote']} />)
  }

  generateFullContent() {

    if (!this.props['full-write-up']) return null;

    const imageReplaced = this.props['full-write-up'].replace(/\(([^()]*?)\.jpg\)/g,"(https://www.beautifulrising.org/$1.jpg)");



    return(
      <ToolReadFullContent>
        <ToolEpigraph {...this.props}/>
        { this.props['pull-quote'] !== ''
            ? this.renderWithPullQuote(imageReplaced)
            : <Markdown
                source={imageReplaced}
                renderers={{Link: RouterLink}}
              />
        }
      </ToolReadFullContent>
    );
  }

  generateContent(){
    if (this.state.showFull) {
      return this.generateFullContent();
    } else {
      return this.generateShortContent();
    }
  }

  checkContentLength() {

    if( this.props.showIfUntranslated(PROP_FULL_WRITE_UP) && this.props['full-write-up'] ) {
      return (
        <ToolMainContent>
          {this.generateContent()}
          <BorderedButton onClick={this.handleShowClick.bind(this)}>
            {this.state.showFull
                ? (<TranslatableStaticText {...staticText.showLess}/>)
                : (<TranslatableStaticText {...staticText.showMore}/>) }
          </BorderedButton>
        </ToolMainContent>
      );
    } else {
      if (
        !this.props.showIfUntranslated(PROP_SHORT_WRITE_UP)
      ) return null;

      return (
        <ToolMainContent>
          {this.generateShortContent()}
        </ToolMainContent>
      )
    }
  }

  renderRealWorldExample() {
    if (this.props.type === 'story')
      return null;

    return (<ToolRealWorld {...this.props} />);
  }

  renderSnapshot() {

    return (
      <ToolSnapshotArea  {...this.props} />
    );
  }
  render() {
    // If snapshot, render the snapshot area...
    const snapshotArea = this.props['module-type'] === 'snapshot'
                          ? this.renderSnapshot() : null;

    return (
      <LanguageThemeProvider>
        <ToolMainArea>
            <ToolUntranslated {...this.props} />
            { this.checkContentLength()}
            <ToolHowToUse show={this.props.showIfUntranslated('how-to-use')} text={this.props['how-to-use']} />
            <ToolWhyItWorked show={this.props.showIfUntranslated('why-it-worked')} text={this.props['why-it-worked']} />
            <ToolWhyItFailed show={this.props.showIfUntranslated('why-it-failed')} text={this.props['why-it-failed']} />
            <ToolKeyItems
              keyTactics={this.props['key-modules'] ? this.props['key-modules']['key-tactics'] : []}
              keyPrinciples={this.props['key-modules'] ? this.props['key-modules']['key-principles']  : []}
              keyTheories={this.props['key-modules'] ? this.props['key-modules']['key-theories'] : [] }
              keyMethodologies={this.props['key-modules'] ? this.props['key-modules']['key-methodologies'] : [] }

              showTactics = { this.props.showIfUntranslated('key-tactics')}
              showPrinciples = { this.props.showIfUntranslated('key-principles')}
              showTheories = { this.props.showIfUntranslated('key-theories')}
              showMethodologies = { this.props.showIfUntranslated('key-methodologies')}
            />
            <ToolLearnMore {...this.props} />

            {snapshotArea}

            { this.renderRealWorldExample() }
        </ToolMainArea>
      </LanguageThemeProvider>
    );
  }
}

ToolPageMain.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(null, mapDispatchToProps)(ToolPageMain);
