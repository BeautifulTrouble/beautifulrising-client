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

import { ToolsButton, ToolsListMenu, ToolsListMenuItem,
          ToolsList, ToolsListItem } from 'components/ToolsComponents';

export const ToolsListContainer = styled.div`
  width: 230px;
  float: right;
  display: ${(props) => props.theme.displayTools }`;

export class ToolsArea extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ToolsListContainer>
        <ToolsListMenu>
          <ToolsListMenuItem>
            <ToolsButton>PDF</ToolsButton>
          </ToolsListMenuItem>
            <ToolsButton>EMAIL</ToolsButton>
          <ToolsListMenuItem>
          </ToolsListMenuItem>
        </ToolsListMenu>
        <ToolsList>
          <ToolsListItem></ToolsListItem>
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
