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
import { Map } from 'immutable';
import { ToolsButton, ToolsListMenu, ToolsListMenuItem,
          ToolsList, ToolsListItem } from 'components/ToolsComponents';

import SelectedTool from './SelectedTool'

export const ToolsListContainer = styled.div`
  width: 230px;
  float: right;`;

export class ToolsArea extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ToolsListContainer>
        <ToolsListMenu>
          <ToolsListMenuItem>
            <ToolsButton>PDF</ToolsButton>
          </ToolsListMenuItem>
          <ToolsListMenuItem>
            <ToolsButton>EMAIL</ToolsButton>
          </ToolsListMenuItem>
        </ToolsListMenu>
        <ToolsList>
          {
            Map(this.props.Tools.selectedTools).toList().map((item) => (
                <ToolsListItem key={item.slug}>
                  <SelectedTool {...item} />
                </ToolsListItem>
              )
            )
          }
        </ToolsList>
      </ToolsListContainer>
    );
  }
}

ToolsArea.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  Tools: makeSelectTools(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolsArea);
