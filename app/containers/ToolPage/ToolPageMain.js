/*
 *
 * ToolPage
 *
 */

import React, { PropTypes } from 'react';
import Markdown from 'react-remarkable';

import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import ToolSnapshotArea from 'components/ToolSnapshotArea';

import AdderRemover from 'containers/Tools/AdderRemover';
import { BorderedButton } from 'components/CommonComponents';
import { ToolMainArea,
         ToolMainContent,
         ToolReadShortContent,
         ToolReadFullContent } from 'components/ToolsPageComponents';

import ToolHowToUse from 'components/ToolHowToUse';
import ToolWhyItWorked from 'components/ToolWhyItWorked';
import ToolWhyItFailed from 'components/ToolWhyItFailed';
import ToolKeyItems from 'components/ToolKeyItems';
import ToolEpigraph from 'components/ToolEpigraph';
import ToolWithPullQuote from 'components/ToolWithPullQuote';
// import { makeSelectToolById } from 'containers/Tool/selectors';
import ToolLearnMore from './ToolLearnMore';
import ToolRealWorld from './ToolRealWorld';
import messages from './messages';

export class ToolPageMain extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      showFull: false
    }
  }

  handleShowClick() {
    this.setState({ showFull : !this.state.showFull })
  }
  generateShortContent() {
    if (!this.props['short-write-up']) return null;
    return(
      <ToolReadShortContent>
        <Markdown source={this.props['short-write-up'].replace(/\(([^()]*?)\.jpg\)/g,"(https://www.beautifulrising.org/$1.jpg)") } />
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
            : <Markdown source={imageReplaced} />
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
    if( this.props['full-write-up']) {
      return (
        <ToolMainContent>
          {this.generateContent()}
          <BorderedButton onClick={this.handleShowClick.bind(this)}>
            {this.state.showFull
                ? (<FormattedMessage {...messages.showLess}/>)
                : (<FormattedMessage {...messages.showMore}/>) }
          </BorderedButton>
        </ToolMainContent>
      );
    } else {
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
    const snapshotArea = this.props['module-type'] === 'snapshot' ? this.renderSnapshot() : null;
    return (
      <ToolMainArea>
          { this.checkContentLength()}
          <ToolHowToUse text={this.props['how-to-use']} />
          <ToolWhyItWorked text={this.props['why-it-worked']} />
          <ToolWhyItFailed text={this.props['why-it-failed']} />
          <ToolKeyItems
            keyTactics={this.props['key-tactics']}
            keyPrinciples={this.props['key-principles']}
            keyTheories={this.props['key-theories']}
            keyMethodologies={this.props['key-methodologies']}
          />
          <ToolLearnMore {...this.props} />

          {snapshotArea}

          { this.renderRealWorldExample() }
      </ToolMainArea>
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
