/* Block */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Markdown from 'react-remarkable';
import { injectIntl } from 'react-intl';

import { BR_IMAGE_PREFIX } from 'containers/Tools/constants';
import {slugify} from 'utils/tags';

import TranslatableStaticText from 'containers/TranslatableStaticText';

import Link from 'components/Link';
import AdderRemover from 'containers/Tools/AdderRemover';
import {ToolType, ToolTitle, BlockContainer,
        BlockViewport, BlockSpiel, BlockAddRem, BlockViewTitleArea} from 'components/ToolsComponents';

import LanguageThemeProvider from 'components/LanguageThemeProvider';
import RegionIcon from 'components/RegionIcon';

import staticText from './staticText';
//Positions

import RegionContainer from 'components/HomePage/RegionContainer';

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
     const { locale } = this.props.intl;
     return (
        <BlockContainer
              lang={locale}
              onMouseOver={this.handleMouseOver.bind(this)}
              onMouseOut={this.handleMouseOut.bind(this)}
              background={`url(${BR_IMAGE_PREFIX + this.props.image})`}>
          <LanguageThemeProvider>
            <BlockViewport>
              <Link to={`/tool/${this.props.slug}`}>
                <BlockViewTitleArea
                      show={!this.state.mouseOver}
                      forceShow={this.state.forceShow}
                      style={this.props.position}
                >
                  <ToolType ar={locale==='ar'} type={this.props.type}>
                    <TranslatableStaticText { ...staticText[this.props.type] } />
                  </ToolType>
                  <ToolTitle ar={locale==='ar'} color={'white'}>
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
                    <RegionContainer lang={locale} show={!this.state.mouseOver}>
                      <RegionIcon type={this.props.type} region={slugify(this.props.region)} />
                    </RegionContainer>
                  : null }
              </Link>
            </BlockViewport>
          </LanguageThemeProvider>
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

export default injectIntl(BlockViewItem);
