import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Markdown from 'react-markdown';
import Isvg from 'react-inlinesvg';
import styled, {ThemeProvider} from 'styled-components';
import { RouterLink } from 'utils/markdown';

import LanguageThemeProvider from 'components/LanguageThemeProvider';
import ContentBlock from 'components/ContentBlock';

import {
  Caption, Container,
  Content, ContentViewport,
  ToolType
} from 'components/ToolPage/Header';

import { SnapshotText, Viewport, OverlayText, Title } from 'components/ToolPage/Snapshot';

import { BR_IMAGE_PREFIX } from 'containers/Tools/constants';
import TypeOverlay from 'components/TypeOverlay';

import TranslatableStaticText, { injectStaticText } from 'containers/TranslatableStaticText';
import staticText from '../staticText';

export class SnapshotContent extends React.PureComponent {
  constructor() {
    super();
  }

  isType(type, key) {
    return this.props.type === type ||
      (this.props[key] && this.props[key].length > 0);
  }

  render() {

    const { buildMessage } = this.props.translatable;
    const callToAction = buildMessage(staticText.expandingToolbox, { link: this.props['bt-link'] });

    return (
      <Container backgroundImage={BR_IMAGE_PREFIX+this.props.image}>
        <Viewport showOverflow={this.props['module-type-effective'] !== 'snapshot'}>
          <LanguageThemeProvider>
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
                <SnapshotText>
                  {this.props.snapshot}
                </SnapshotText>
              </ContentViewport>
            </Content>
            <TypeOverlay type={this.props.type} />
            <OverlayText>
              <Markdown source={callToAction} renderers={{Link: RouterLink}} />
            </OverlayText>
          </LanguageThemeProvider>
        </Viewport>
      </Container>
    );
  }
}

SnapshotContent.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(null, mapDispatchToProps)(injectStaticText(injectIntl(SnapshotContent)));
