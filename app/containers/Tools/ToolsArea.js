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
import EmailTools from 'containers/EmailTools';

import { DOWNDLOAD_PDF, SEND_EMAIL } from './constants';

import { Link } from 'react-router';
import { Map } from 'immutable';
import { ToolsButton, ToolsListMenu, ToolsListMenuItem,
          ToolsList, ToolsListItem } from 'components/ToolsComponents';

import SelectedTool from './SelectedTool'

export const ToolsListContainer = styled.div`
    width: 216px;
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
`;

const DownloadPDFContainer = styled.div`
  display: ${props=>props.show?'block':'none'};
`;

const EmailContainer = styled.div`
  display: ${props=>props.show?'block':'none'};
`;

export class ToolsArea extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      chosen: null,
      hovering: null
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
  handleMouseOver(item = null) {
    this.setState({hovering: item});
  }
  handleMouseOut(item = null ) {
    this.setState({hovering: null});
  }
  buildPDFLink () {
    const slugs = Map(this.props.Tools.selectedTools).toList().map(item=>item.slug).join(',');
    const lang = this.props.intl.locale;

    return `https://api.beautifulrising.org/pdf/download?tools=${encodeURIComponent(slugs)}&lang=${lang}`
  }

  render() {
    return (
      <ToolsListContainer show={this.props.show} lang={this.props.lang} rotate={true}>
        <ToolsListMenu>
          <ToolsListMenuItem>
            <ToolsButton
              // onClick={()=>this.handleClick(DOWNDLOAD_PDF)}
              to={this.buildPDFLink()} target='_blank'
              color={this.state.hovering === DOWNDLOAD_PDF ? 'black' : '#B3B3B3'}
              show={this.state.hovering === DOWNDLOAD_PDF }
              onMouseOver={()=>this.handleMouseOver(DOWNDLOAD_PDF)}
              onMouseOut={()=>this.handleMouseOut(DOWNDLOAD_PDF)}
              >
              <Isvg src={PDFIcon} />
            </ToolsButton>
          </ToolsListMenuItem>
          <ToolsListMenuItem>
            <ToolsButton
               onClick={()=>this.handleClick(SEND_EMAIL)}
               color={this.state.chosen === SEND_EMAIL ? 'black' : '#B3B3B3'}
               show={this.state.chosen === SEND_EMAIL }
            >
              <Isvg src={EmailIcon} />
            </ToolsButton>
          </ToolsListMenuItem>
        </ToolsListMenu>
        <Container>
          <EmailContainer show={this.state.chosen === SEND_EMAIL} >
            <EmailTools />
          </EmailContainer>
          <DownloadPDFContainer show={this.state.chosen === DOWNDLOAD_PDF}>
            <Link to={this.buildPDFLink()} target='_blank'>Download PDF</Link>
          </DownloadPDFContainer>
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
