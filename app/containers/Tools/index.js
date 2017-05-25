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

import { ToolsButton, ToolsMenu,
         ToolsMenuItem, ToolsListContainer,
         ToolsListMenu, ToolsListMenuItem,
         ToolsList, ToolsListItem,
         ToolsContainer, ToolsViewport } from 'components/ToolsComponents';

import ToolsArea from './ToolsArea';
import { setShowTools } from './actions';

export class Tools extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  onToggleClick() {
    this.props.setShowTools(!this.props.Tools.show);
  }

  render() {
    return (
        <ToolsContainer showTools={this.props.Tools.show}>
          <ToolsViewport>
            <ToolsMenu>
              <ToolsMenuItem>
                <ToolsButton onClick={this.onToggleClick.bind(this)}>
                  {this.props.Tools.show ? 'Close' : 'Open'}
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
            {this.props.Tools.show ? <ToolsArea /> : null}
          </ToolsViewport>
        </ToolsContainer>
    );
  }
}

Tools.propTypes = {
  show: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
  Tools: makeSelectTools(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setShowTools: (toShow) => {
      dispatch(setShowTools(toShow));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tools);
