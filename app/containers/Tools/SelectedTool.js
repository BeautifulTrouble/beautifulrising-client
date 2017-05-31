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

import { Link } from 'react-router';

import { SelectedToolItem, SelectedToolTitle,
          SelectedToolSnapshot, SelectedToolCommands, SelectedToolCommandItem } from 'components/SelectedToolComponents';
import AdderRemover from './AdderRemover';

export const ToolsListContainer = styled.div`
  width: 230px;
  float: right;`;

export class SelectedTool extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <SelectedToolItem>
        <SelectedToolTitle>{this.props.title}</SelectedToolTitle>
        <SelectedToolSnapshot>
          {this.props.snapshot}
        </SelectedToolSnapshot>
        <SelectedToolCommands>
          <SelectedToolCommandItem>
            <AdderRemover {...this.props} showFull={true}/>
          </SelectedToolCommandItem>
          <SelectedToolCommandItem>
            Share
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
