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
import Isvg from 'react-inlinesvg';

import { Link } from 'react-router';

import { ToolsButton, ToolsMenu,
         ToolsMenuItem, ToolsListContainer,
         ToolsListMenu, ToolsListMenuItem,
         ToolsList, ToolsListItem,
         ToolsContainer, ToolsViewport } from 'components/ToolsComponents';

import { NEWS_FEED, MY_TOOLS } from './constants';
 // SVGs
 import ArrowIcon from 'assets/images/icons/arrow.svg';
 import NewsFeedIcon from 'assets/images/icons/news-feed.svg';
 import MyToolsIcon from 'assets/images/icons/my-tools.svg';


import ToolsArea from './ToolsArea';
import { setShowTools } from './actions';

const ToolsOpenerCloser = styled.div``;

const ToolsMenuContainer = styled.div`
height: 100%;
`;
export class Tools extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      chosen: NEWS_FEED //myTools
    }
  }
  onToggleClick(chosen = null) {
    if (chosen !== null) {
      this.props.setShowTools(true);
    } else {
      this.props.setShowTools(!this.props.Tools.show);
    }

    if (this.props.Tools.show && chosen === this.state.chosen) {
      this.props.setShowTools(false);
    }

    if ( chosen !== null) {
      this.setState({ chosen })
    }
  }

  render() {
    return (
        <ToolsContainer showTools={this.props.Tools.show}>
          <ToolsViewport>
              <ToolsMenu>
                <ToolsMenuItem>
                  <ToolsButton
                    onClick={() => this.onToggleClick(null)}
                    color={this.props.Tools.show ? 'black' : '#AFAFAF'}
                    rotate={true}
                    show={this.props.Tools.show}
                  >
                    <Isvg src={ArrowIcon} />
                  </ToolsButton>
                </ToolsMenuItem>
                <ToolsMenuItem>
                  <ToolsButton
                    onClick={() => this.onToggleClick(NEWS_FEED)}
                    color={this.props.Tools.show && this.state.chosen === NEWS_FEED ? 'black' : '#AFAFAF'}
                    show={this.props.Tools.show}
                    >
                    <Isvg src={NewsFeedIcon} />
                    <FormattedMessage {...messages.newsFeed} />
                  </ToolsButton>
                </ToolsMenuItem>
                <ToolsMenuItem>
                  <ToolsButton
                      onClick={() => this.onToggleClick(MY_TOOLS)}
                      color={this.props.Tools.show && this.state.chosen === MY_TOOLS ? 'black' : '#AFAFAF'}
                      show={this.props.Tools.show}
                  >
                    <Isvg src={MyToolsIcon} />
                    <FormattedMessage {...messages.myTools} />
                  </ToolsButton>
                </ToolsMenuItem>
              </ToolsMenu>
            <ToolsArea show={this.props.Tools.show}/>
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
