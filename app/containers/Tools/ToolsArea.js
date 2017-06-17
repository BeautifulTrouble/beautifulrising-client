/*
 *
 * Tools
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import Isvg from 'react-inlinesvg';

import makeSelectTools from './selectors';
import messages from './messages';
import styled from 'styled-components';

import PDFIcon from 'assets/images/icons/pdf.svg';
import EmailIcon from 'assets/images/icons/email.svg';

import FacebookIcon from 'assets/images/icons/facebook.svg';
import TwitterIcon from 'assets/images/icons/twitter.svg';

import EmailTools from 'containers/EmailTools';
import EmptyToolsMessage from 'containers/EmptyToolsMessage';
import NewsFeed from 'containers/NewsFeed';

import { DOWNDLOAD_PDF, SEND_EMAIL } from './constants';
import { NEWS_FEED, MY_TOOLS, TWITTER_FEED, FACEBOOK_FEED } from './constants';


import { Link } from 'react-router';
import { Map } from 'immutable';
import { ToolsButton, ToolsListMenu, ToolsListMenuItem,
          ToolsList, ToolsListItem } from 'components/ToolsComponents';

import SelectedTool from './SelectedTool';

export const ToolsListContainer = styled.div`
    width: calc(100% - 78px);
    float: ${props=>props.lang === 'ar' ? 'right' : 'left'};
    direction: float: ${props=>props.lang === 'ar' ? 'rtl' : 'ltr'};
    height: 100%;
    display: ${props=>props.show ? 'block' : 'none'};
    div * {
      direction: ${props=>props.lang === 'ar' ? 'rtl' : 'ltr'};
      text-align: ${props=>props.lang === 'ar' ? 'right' : 'left'};
    }
`;

const Container = styled.div`
  height: calc(100% - 60px);
  overflow-y: auto;
  overflow-x: hidden;
  display: ${props=>props.show?'block':'none'};
`;

const DownloadPDFContainer = styled.div`
  display: ${props=>props.show?'block':'none'};
  padding: 10px;
  h3 {
    margin: 0; padding: 0;
  }
  span {
    font-size: 14px;
    line-height: 22px;
  }

  a {
    &::before { display: block; content: ' ';}
    color: #959595;
    display: inline-block;
    border: 2px;
    text-transform: uppercase;
    font-size: 14px;
    margin-top: 10px;
    font-weight: bold;

  }
  border-bottom: 2px solid;
`;

const EmailContainer = styled.div`
  display: ${props=>props.show?'block':'none'};
`;

export class ToolsArea extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      chosen: null,
      newsFeed: TWITTER_FEED
    };
  }

  handleClick(item = null) {
    if ( item && this.state.chosen !== item) {
      this.setState({ chosen: item });
    }

    if (this.state.chosen === item) {
      this.setState({ chosen: null });
    }
  }

  buildPDFLink () {
    const slugs = Map(this.props.Tools.selectedTools).toList().map(item=>item.slug).join(',');
    const lang = this.props.intl.locale;

    return `https://api.beautifulrising.org/pdf/download?tools=${encodeURIComponent(slugs)}&lang=${lang}`
  }

  handleNewsFeedChange(feedType) {
    this.setState({ newsFeed: feedType });
  }

  render() {

    return (
      <ToolsListContainer show={this.props.show} lang={this.props.lang} rotate={true}>

        <ToolsListMenu show={this.props.Tools.viewType === NEWS_FEED}>
          <ToolsListMenuItem>
            <ToolsButton toShow={this.state.newsFeed === TWITTER_FEED} onClick={()=>this.handleNewsFeedChange(TWITTER_FEED)}>
              <Isvg src={TwitterIcon} />
            </ToolsButton>
          </ToolsListMenuItem>
          <ToolsListMenuItem>
            <ToolsButton toShow={this.state.newsFeed === FACEBOOK_FEED} onClick={()=>this.handleNewsFeedChange(FACEBOOK_FEED)}>
              <Isvg src={FacebookIcon} />
            </ToolsButton>
          </ToolsListMenuItem>
        </ToolsListMenu>

        <ToolsListMenu show={this.props.Tools.viewType === MY_TOOLS}>
          <ToolsListMenuItem>
            <ToolsButton
              onClick={()=>this.handleClick(DOWNDLOAD_PDF)}
              toShow={this.state.chosen === DOWNDLOAD_PDF }
              >
              <Isvg src={PDFIcon} />
            </ToolsButton>
          </ToolsListMenuItem>
          <ToolsListMenuItem>
            <ToolsButton
               onClick={()=>this.handleClick(SEND_EMAIL)}
               toShow={this.state.chosen === SEND_EMAIL }
            >
              <Isvg src={EmailIcon} />
            </ToolsButton>
          </ToolsListMenuItem>
        </ToolsListMenu>


        <Container show={ this.props.Tools.viewType === NEWS_FEED }>
          <NewsFeed />
        </Container>

        <Container show={ this.props.Tools.viewType === MY_TOOLS }>
          <EmailContainer show={this.state.chosen === SEND_EMAIL} >
            <EmailTools />
          </EmailContainer>
          <DownloadPDFContainer show={this.state.chosen === DOWNDLOAD_PDF}>
            <h3>Download PDF</h3>
            <FormattedMessage {...messages.pdfSpiel} />
            <Link to={this.buildPDFLink()} target='_blank'>Download PDF</Link>
          </DownloadPDFContainer>

          <Container show={Map(this.props.Tools.selectedTools).toList().size === 0}>
            <EmptyToolsMessage/>
          </Container>

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
        </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ToolsArea));
