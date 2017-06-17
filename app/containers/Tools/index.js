/*
 *
 * Tools
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import makeSelectTools, {makeSelectLanguage} from './selectors';
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

import { ThemeProvider } from 'styled-components';

import ToolsArea from './ToolsArea';
import { setShowTools, setViewType } from './actions';

const ToolsOpenerCloser = styled.div``;

const ToolsMenuContainer = styled.div`
height: 100%;
`;

const ToolsViewType = styled(ToolsButton)`
  color: ${props=>props.chosen&&props.toShow ? 'black' : '#AFAFAF' };
  svg, svg * {
    fill: ${props=>props.chosen&&props.toShow ? 'black' : '#AFAFAF' };
  }
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

    if (this.props.Tools.show && chosen === this.props.Tools.viewType) {
      this.props.setShowTools(false);
    }

    if ( chosen !== null) {
      this.props.setViewType(chosen);
    }
  }

  render() {
    return (
      <ThemeProvider theme={{ lang: this.props.language }} >
        <ToolsContainer showTools={this.props.Tools.show}>
          <ToolsViewport>
              <ToolsMenu>
                <ToolsMenuItem>
                  <ToolsButton
                    onClick={() => this.onToggleClick(null)}
                    rotate={true}
                    toShow={this.props.Tools.show}
                  >
                    <Isvg src={ArrowIcon} />
                  </ToolsButton>
                </ToolsMenuItem>
                <ToolsMenuItem>
                  <ToolsViewType
                    onClick={() => this.onToggleClick(NEWS_FEED)}
                    chosen={this.props.Tools.viewType === NEWS_FEED}
                    toShow={this.props.Tools.show}
                    >
                    <Isvg src={NewsFeedIcon} />
                    <FormattedMessage {...messages.newsFeed} />
                  </ToolsViewType>
                </ToolsMenuItem>
                <ToolsMenuItem>
                  <ToolsViewType
                      onClick={() => this.onToggleClick(MY_TOOLS)}
                      chosen={this.props.Tools.viewType === MY_TOOLS}
                      toShow={this.props.Tools.show}
                  >
                    <Isvg src={MyToolsIcon} />
                    <FormattedMessage {...messages.myTools} />
                  </ToolsViewType>
                </ToolsMenuItem>
              </ToolsMenu>
            <ToolsArea lang={this.props.language} show={this.props.Tools.show}/>
          </ToolsViewport>
        </ToolsContainer>
      </ThemeProvider>
    );
  }
}

Tools.propTypes = {
  show: PropTypes.bool
};

const mapStateToProps = createStructuredSelector({
  Tools: makeSelectTools(),
  language: makeSelectLanguage()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setShowTools: (toShow) => {
      dispatch(setShowTools(toShow));
    },
    setViewType: (viewType) => {
      dispatch(setViewType(viewType));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tools);
