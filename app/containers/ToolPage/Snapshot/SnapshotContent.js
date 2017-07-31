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
import TypeOverlay from 'components/TypeOverlay';

import TranslatableStaticText from 'containers/TranslatableStaticText';
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
    console.log(this.props);
    
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
              </ContentViewport>
            </Content>
            <TypeOverlay type={this.props.type} />
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

export default connect(null, mapDispatchToProps)(injectIntl(SnapshotContent));
