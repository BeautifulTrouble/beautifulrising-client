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

const ToolsContainer = styled.div`
  position: fixed;
  right: 50%;
  width: 65px;
  height: calc(100vh - 170px);
  border: 3px solid black;
  top: 160px;
  transform: translateX(600px);
  `;
const ToolsButton = styled.button``;
const ToolsMenu = styled.ul`padding: 0;`;
const ToolsMenuItem = styled.li`list-style: none;`;
const ToolsListContainer = styled.div``;
const ToolsListMenu = styled.ul`padding: 0;`;
const ToolsListMenuItem = styled.li`list-style: none;`;
const ToolsList = styled.ul`padding: 0;`;
const ToolsListItem = styled.li`list-style: none;`;


export class Tools extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ToolsContainer>
        <ToolsMenu>
          <ToolsMenuItem>
            <ToolsButton>
              Open
            </ToolsButton>
          </ToolsMenuItem>
          <ToolsMenuItem>
            <ToolsButton>
              <FormattedMessage {...messages.newsFeed} />
            </ToolsButton>
          </ToolsMenuItem>
          <ToolsMenuItem>
            <ToolsButton>
              <FormattedMessage {...messages.myTools} />
            </ToolsButton>
          </ToolsMenuItem>
        </ToolsMenu>

        <ToolsListContainer>
          <ToolsListMenu>
            <ToolsListMenuItem>
              <ToolsButton>PDF</ToolsButton>
            </ToolsListMenuItem>
              <ToolsButton>EMAIL</ToolsButton>
            <ToolsListMenuItem>
            </ToolsListMenuItem>
          </ToolsListMenu>
        </ToolsListContainer>
      </ToolsContainer>
    );
  }
}

Tools.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  Tools: makeSelectTools(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tools);
