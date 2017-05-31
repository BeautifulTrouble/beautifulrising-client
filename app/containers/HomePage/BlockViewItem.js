/* Block */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import Link from 'components/Link';
import AdderRemover from 'containers/Tools/AdderRemover';

import {ToolType, ToolTitle, BlockContainer,
        BlockViewport, BlockSpiel, BlockAddRem, BlockViewTitleArea} from 'components/ToolsComponents';

import messages from './messages';
import { BR_IMAGE_PREFIX } from 'containers/Tools/constants';

class BlockViewItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false
    }
  }

   handleMouseOver() {
     this.setState({mouseOver: true });

   }
   handleMouseOut() {
     this.setState({mouseOver: false });
   }

   render() {
     return (
      <BlockContainer
            onMouseOver={this.handleMouseOver.bind(this)}
            onMouseOut={this.handleMouseOut.bind(this)}
            background={`url(${BR_IMAGE_PREFIX + this.props.image})`}>
        <BlockViewport>
          <Link to={`/tool/${this.props.slug}`}>
            <BlockViewTitleArea show={!this.state.mouseOver}>
              <ToolType type={this.props.type}>{this.props.type}</ToolType>
              <ToolTitle color={'white'}>
                {this.props.title}
              </ToolTitle>
            </BlockViewTitleArea>

            <BlockSpiel show={this.state.mouseOver}
                type={this.props.type}>{this.props.snapshot}</BlockSpiel>
          </Link>

          <BlockAddRem>
            <AdderRemover {...this.props}/>
          </BlockAddRem>
        </BlockViewport>
      </BlockContainer>
     );
   }
}

BlockViewItem.propTypes = {
  title: PropTypes.string.isRequired,
  snapshot: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default BlockViewItem;