/**
*
* AboutPageComponents
*
*/

import React from 'react';
import styled from 'styled-components';

import { injectIntl } from 'react-intl';
import VisibilitySensor from 'react-visibility-sensor';

import ContentBlock from 'components/ContentBlock';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import messages from './messages';
import Markdown from 'react-remarkable';
import Isvg from 'react-inlinesvg';

import Container from 'components/PlatformsPage/Container';
import Content from 'components/PlatformsPage/Content';
import CTA from 'components/PlatformsPage/CTA';
import IconContainer from 'components/PlatformsPage/IconContainer';
import Image from 'components/PlatformsPage/Image';
import ImageContent from 'components/PlatformsPage/ImageContent';
import Subtitle from 'components/PlatformsPage/Subtitle';
import Title from 'components/PlatformsPage/Title';
import TextContent from 'components/PlatformsPage/TextContent';
import Viewport from 'components/PlatformsPage/Viewport';

import CollapsingSection from 'components/CollapsingSection';

class Platform extends React.Component {
  render() {

    if (!this.props.content || this.props.content === undefined) return null;
    const lang = this.props.intl.locale;
    return (
      <LanguageThemeProvider>
        <Container lang={lang}>
          <Viewport>
            {/*<IconContainer lang={lang}>
              <Isvg src={this.props.icon} />
            </IconContainer>
            */}
            <TextContent lang={lang}>
              <Content>
                <Title lang={lang}>
                  {this.props.content.get('title')}
                </Title>
                <ContentBlock>
                  {this.props.content.get('introduction')}
                </ContentBlock>

                <CollapsingSection
                  header={
                      (<Subtitle>
                        {this.props.misc.get('what')}
                      </Subtitle>)
                  }
                >
                  <ContentBlock>
                    <Markdown source={this.props.content.get('what')} />
                  </ContentBlock>
                </CollapsingSection>

                <CollapsingSection
                  header={
                      (<Subtitle>
                        {this.props.misc.get('how')}
                      </Subtitle>)
                  }
                >
                  <ContentBlock>
                    <Markdown source={this.props.content.get('how')} />
                  </ContentBlock>
                </CollapsingSection>

                <CTA>
                  <Markdown source={this.props.content.get('get')} />
                </CTA>
              </Content>
            </TextContent>
            <ImageContent lang={lang}>
              <Image source={this.props.content.get('image')} />
            </ImageContent>
          </Viewport>
        </Container>
      </LanguageThemeProvider>
    );
  }
}

export default injectIntl(Platform);
