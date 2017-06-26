/*
 *
 * ToolPage
 *
 */

import React, { PropTypes } from 'react';

import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Markdown from 'react-remarkable';

import AdderRemover from 'containers/Tools/AdderRemover';
import ContinentIcon from 'components/ContinentIcon';
import { ToolHeaderContainer,
          ToolHeaderViewport,
          ToolHeaderType,
          ToolHeaderTitle,
          ToolPageCaption} from 'components/ToolsPageComponents';
import { BR_IMAGE_PREFIX } from 'containers/Tools/constants';

import Isvg from 'react-inlinesvg';
import ShareIcon from 'assets/images/icons/share-small.svg';
import ShareButton from 'components/ShareButton';
import TypeFlag from 'components/TypeFlag';
import TypeOverlay from 'components/TypeOverlay';
// import { makeSelectToolById } from 'containers/Tool/selectors';
import styled from 'styled-components';
import messages from './messages';

const Content = styled.div`
  position: absolute;
  z-index: 100;
  width: calc(100% - 90px);
  height: 100%;
  padding-top: 50px;
`;

const Viewport = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const ShareContainer = styled.div`
  font-size: 14px; line-height: 22px;

  display: block;
  margin-top: 11px;
  svg * {
    fill: white;
  }
  span.share-button {
    margin-right: 10px;
  }
  color: white;
  * { color: white; font-family: 'Avenir Black', 'Kaff Bold'; text-transform: uppercase; }
`;
export class ToolPageHeader extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  getBanner() {
    if(this.props['module-type'] === 'snapshot') {
      return (<TypeOverlay type={this.props.type}
        isPrinciple={this.props.type === "principle" || (this.props['key-principles'] && this.props['key-principles'].length > 0)}
        isMethodology={this.props.type === "methodology" || (this.props['key-methodologies'] && this.props['key-methodologies'].length > 0)}
        isTactic={this.props.type === "tactic" || (this.props['key-tactics'] && this.props['key-tactics'].length > 0)}
        isTheory={this.props.type === "theory" || (this.props['key-theories'] && this.props['key-theories'].length > 0)}
      />)
    } else if ( ['full', 'gallery'].includes(this.props['module-type'])) {
      return (<TypeFlag type={this.props.type}
        isPrinciple={this.props.type === "principle" || (this.props['key-principles'] && this.props['key-principles'].length > 0)}
        isMethodology={this.props.type === "methodology" || (this.props['key-methodologies'] && this.props['key-methodologies'].length > 0)}
        isTactic={this.props.type === "tactic" || (this.props['key-tactics'] && this.props['key-tactics'].length > 0)}
        isTheory={this.props.type === "theory" || (this.props['key-theories'] && this.props['key-theories'].length > 0)}
      />)
    }

    return null;
  }
  render() {
    return (
      <ToolHeaderContainer backgroundImage={BR_IMAGE_PREFIX+this.props.image}>
        <ToolHeaderViewport showOverflow={this.props['module-type'] !== 'snapshot'}>
          <Content>
            <Viewport>
              <ToolHeaderType type={this.props.type}>
                <FormattedMessage {...messages[this.props.type]} />
              </ToolHeaderType>
              <ToolHeaderTitle color={'white'}>{this.props.title}</ToolHeaderTitle>
              <AdderRemover
                slug={this.props.slug}
                title={this.props.title}
                type={this.props.type}
                snapshot={this.props.snapshot}
                addText={(<FormattedMessage {...messages.addTool} />)}
                removeText={(<FormattedMessage {...messages.removeTool} />)}
              />
              <ShareContainer>
                <ShareButton {...this.props}>
                  <Isvg src={ShareIcon} className={'share-button'} />
                  <FormattedMessage {...messages.share}/>
                </ShareButton>
              </ShareContainer>
              <ToolPageCaption show={this.props['image-caption'] !== undefined}>
                <Markdown source={'/ ' + this.props['image-caption']} />
              </ToolPageCaption>
              <ContinentIcon {...this.props}/>
            </Viewport>
          </Content>
          { this.getBanner() }
        </ToolHeaderViewport>
      </ToolHeaderContainer>
    );
  }
}

ToolPageHeader.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(null, mapDispatchToProps)(ToolPageHeader);
