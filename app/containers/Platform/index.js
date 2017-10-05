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
import Markdown from 'react-markdown';
import { RouterLink } from 'utils/markdown';

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

const Introduction = styled(ContentBlock)`
  margin-bottom: 26px;
`;

const CollapsingSectionContent = styled(ContentBlock)`
  padding-bottom: 36px;
`
class Platform extends React.Component {
  renderQuestions() {
    return this.props.content.questions.map((item,index) => (
      <CollapsingSection
        key={`${index}-${item.title}`}
        header={
            (<Subtitle>
              {item.title}
            </Subtitle>)
        }
      >
        <CollapsingSectionContent>
          <Markdown
              source={item.text}
              renderers={{Link: RouterLink}}
          />
        </CollapsingSectionContent>
      </CollapsingSection>
    ));
  }
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
                  {this.props.content.title}
                </Title>
                <Introduction>
                  {this.props.content.introduction}
                </Introduction>

                {this.renderQuestions()}
                <CTA>
                  <Markdown
                      source={this.props.content.get}
                      renderers={{Link: RouterLink}}
                  />
                </CTA>
              </Content>
            </TextContent>
            <ImageContent lang={lang}>
              <Image source={this.props.content.image} />
            </ImageContent>
          </Viewport>
        </Container>
      </LanguageThemeProvider>
    );
  }
}

export default injectIntl(Platform);
