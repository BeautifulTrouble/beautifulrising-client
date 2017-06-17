/* Block */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import {slugify} from 'utils/tags';
import { FormattedMessage } from 'react-intl';
import Link from 'components/Link';
import AdderRemover from 'containers/Tools/AdderRemover';

import {ToolType, ToolTitle, BlockContainer,
        BlockViewport, BlockSpiel, BlockAddRem, BlockViewTitleArea} from 'components/ToolsComponents';
import Markdown from 'react-remarkable';
import RegionIcon from 'components/RegionIcon';
import messages from './messages';
import { BR_IMAGE_PREFIX } from 'containers/Tools/constants';

//Positions

const RegionContainer = styled.div`
  position: absolute;
  top: 10px;
  opacity: ${props=>props.show?'1':'0'};
  transition: opacity 0.3s ease;
  ${props=>props.lang==='ar' ? 'left: 10px;' : 'right: 10px;'}
  svg {  width: 50px; height: 50px;}
`;

class BlockViewItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
      forceShow: false
    }
  }

   handleMouseOver() {
     this.setState({mouseOver: true });

   }
   handleMouseOut() {
     this.setState({mouseOver: false });
   }

   handleForceShow(){
     this.setState({forceShow: true});
   }

   handleRemoveForce() {
    this.setState({forceShow: false});
   }

   render() {
     return (
      <BlockContainer
            lang={this.props.lang}
            onMouseOver={this.handleMouseOver.bind(this)}
            onMouseOut={this.handleMouseOut.bind(this)}
            background={`url(${BR_IMAGE_PREFIX + this.props.image})`}>
        <BlockViewport>
          <Link to={`/tool/${this.props.slug}`}>
            <BlockViewTitleArea
                  show={!this.state.mouseOver}
                  forceShow={this.state.forceShow}
                  style={this.props.position}
            >
              <ToolType type={this.props.type}>
                <FormattedMessage { ...messages[this.props.type] } />
              </ToolType>
              <ToolTitle color={'white'}>
                {this.props.title}
              </ToolTitle>
              <BlockAddRem onMouseOver={this.handleForceShow.bind(this)} onMouseOut={this.handleRemoveForce.bind(this)}>
                <AdderRemover {...this.props}/>
              </BlockAddRem>
            </BlockViewTitleArea>

            <BlockSpiel show={this.state.mouseOver}
               forceShow={this.state.forceShow}
                type={this.props.type}>
                  <Markdown source={this.props.snapshot} /></BlockSpiel>

            { this.props.type === 'story' ?
                <RegionContainer lang={this.props.lang} show={!this.state.mouseOver}>
                  <RegionIcon type={this.props.type} region={slugify(this.props.region)} />
                </RegionContainer>
              : null }
          </Link>
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
