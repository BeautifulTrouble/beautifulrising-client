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

import AdderRemover from 'containers/Tools/AdderRemover';
import { BorderedButton } from 'components/CommonComponents';
import { ToolMainArea,
         ToolMainContent,
         ToolReadShortContent,
         ToolReadFullContent } from 'components/ToolsPageComponents';
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
    return(
      <ToolReadShortContent>
        <Markdown source={this.props['short-write-up'].replace(/\(([^()]*?)\.jpg\)/g,"(https://www.beautifulrising.org/$1.jpg)") } />
      </ToolReadShortContent>
    );
  }

  generateFullContent() {
    return(
      <ToolReadFullContent>
        <Markdown source={this.props['full-write-up'].replace(/\(([^()]*?)\.jpg\)/g,"(https://www.beautifulrising.org/$1.jpg)")} />
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
  render() {

    return (
      <ToolMainArea>
          { this.checkContentLength()}


          <ToolLearnMore {...this.props} />
          <ToolRealWorld {...this.props} />
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
