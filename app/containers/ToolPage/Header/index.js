import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Markdown from 'react-markdown';
import Isvg from 'react-inlinesvg';
import styled, {ThemeProvider} from 'styled-components';

import LanguageThemeProvider from 'components/LanguageThemeProvider';
import ContentBlock from 'components/ContentBlock';

import {
  Caption, Container,
  Content, ContentViewport,
  Title, ToolType,
  Viewport,
} from 'components/ToolPage/Header';

import { BR_IMAGE_PREFIX } from 'containers/Tools/constants';
import { RouterLink } from 'utils/markdown';
import ShareIcon from 'assets/images/icons/share-small.svg';
import ShareButton from 'containers/ShareButton';
import TypeFlag from 'components/TypeFlag';
import TypeOverlay from 'components/TypeOverlay';

import TranslatableStaticText from 'containers/TranslatableStaticText';
import staticText from '../staticText';

import InteractiveArea from './InteractiveArea';

export class Header extends React.PureComponent {
  constructor() {
    super();
  }

  isType(type, key) {
    return this.props.type === type ||
      (this.props[key] && this.props[key].length > 0);
  }

  getBanner() {
    if(this.props['module-type-effective'] === 'snapshot') {
      return (<TypeOverlay type={this.props.type} />);
    } else if ( ['full', 'gallery'].includes(this.props['module-type-effective'])) {
      return (
      <TypeFlag type={this.props.type}
        isPrinciple={this.isType('principle', 'key-principles')}
        isMethodology={this.isType('methodology', 'key-methodologies')}
        isTactic={this.isType('tactic', 'key-tactics')}
        isTheory={this.isType('theory', 'key-theories')}
      />);
    }
  }

  render() {
    
    return (
      <Container id="XX" backgroundImage={BR_IMAGE_PREFIX+this.props.image}>
        <Viewport showOverflow={this.props['module-type-effective'] !== 'snapshot'}>
          <LanguageThemeProvider>
            <InteractiveArea {...this.props}/>
            <Content id="Content">
              <ContentViewport>
                <ToolType type={this.props.type}>
                  <Link to={`/type/${this.props.type}`}>
                    <TranslatableStaticText {...staticText[this.props.type]} />
                  </Link>
                </ToolType>
                <Title color={'white'}>
                  {this.props.title}
                </Title>
                <Caption
                  show={
                      this.props['image-caption'] !== undefined
                      && this.props.showIfUntranslated('image-caption')
                  }>
                  <Markdown
                    source={'/ ' + this.props['image-caption']}
                    renderers={{Link: RouterLink }} />
                </Caption>
              </ContentViewport>
            </Content>
            { this.getBanner() }
          </LanguageThemeProvider>
        </Viewport>
      </Container>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(null, mapDispatchToProps)(injectIntl(Header));
