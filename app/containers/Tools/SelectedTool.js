/*
 *
 * Tools
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectTools from './selectors';
import messages from './messages';
import styled from 'styled-components';

import MethodologyFlag from 'assets/images/type/methodology-small.svg';
import PrincipleFlag from 'assets/images/type/principle-small.svg';
import TacticFlag from 'assets/images/type/tactic-small.svg';
import TheoryFlag from 'assets/images/type/theory-small.svg';
import StoryFlag from 'assets/images/type/story-small.svg';

import { Link } from 'react-router';

import { SelectedToolItem, SelectedToolTitle,
          SelectedToolSnapshot, SelectedToolCommands, SelectedToolCommandItem } from 'components/SelectedToolComponents';
import AdderRemover from './AdderRemover';

export class SelectedTool extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  getFlag() {
    switch(this.props.type) {
      case 'methodology': return MethodologyFlag;
      case 'principle': return PrincipleFlag;
      case 'tactic': return TacticFlag;
      case 'theory': return TheoryFlag;
      case 'story': return StoryFlag;
    }
  }

  render() {
    const flag = this.getFlag();
    console.log("FLAG", flag);
    return (
      <SelectedToolItem>
        <SelectedToolTitle flag={flag}>{this.props.title}</SelectedToolTitle>
        <SelectedToolSnapshot>
          {this.props.snapshot}
        </SelectedToolSnapshot>
        <SelectedToolCommands>
          <SelectedToolCommandItem>
            <AdderRemover {...this.props} showFull={true}/>
          </SelectedToolCommandItem>
          <SelectedToolCommandItem>
          </SelectedToolCommandItem>
        </SelectedToolCommands>
      </SelectedToolItem>
    );
  }
}

SelectedTool.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  snapshot: PropTypes.string.isRequired
};

const mapStateToProps = createStructuredSelector({
  Tools: makeSelectTools(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedTool);
