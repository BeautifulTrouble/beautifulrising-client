import React, { PropTypes } from 'react';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import Markdown from 'react-markdown';
import { RouterLink } from 'utils/markdown';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import BlockViewItem from 'containers/HomePage/BlockViewItem';

import styled from 'styled-components';
import ContentBlock from 'components/ContentBlock';
import HeaderBlock from 'components/HeaderBlock';


const Container = styled.div`
  display: flex
  margin-top: 95px;
`;
const ContentArea = styled.div`
  width: 490px;
  min-width: 490px;
  display: inline-block;
  border-${p=>p.theme.isArabic?'left':'right'}: 2px solid;
  align-items: stretch;
  position: relative;
  padding: 70px;

  &::after {
    content: ' ';
    position: absolute;
    width: 50px;
    right: -25px;
    height: 0;
    border-top: 2px solid;
    top: ${p=>p.twig + 10}%;
  }
`;
const FeatureArea = styled.div`
  flex-grow: 1;
  align-items: stretch;
  display: inline-block;
  padding-${p=>p.theme.isArabic?'right':'left'}: 80px;
  padding-top: 45px;
  padding-bottom: 70px;
`;

const DateContent = styled(ContentBlock)`
  font-style: italic;
  font-weight: 12px;
`;
const Title = styled(HeaderBlock)`
  font-size: 40px;
`;
const FeatureImage = styled.img`width: 100%`;
const BEAUTIFULRISING_URL = `//www.beautifulrising.org/`;
class Post extends React.PureComponent {

  constructor(props) {
    super();
  }

  renderImage() {
    return (
      <FeatureImage src={BEAUTIFULRISING_URL + this.props.image} />
    )
  }

  renderTools() {

    return this.props.tools.map((item, index) => {
      if (!this.props.toolsData[item] || this.props.toolsData[item] === undefined) return null;
      return (
      <BlockViewItem
        {...this.props.toolsData[item]}
        key={item}
      />
    )})
  }
  renderFeatureArea() {

    if (this.props.image) {
      return (
        <FeatureArea>
          {this.renderImage()}
        </FeatureArea>
      );
    }

    if (this.props.tools) {
      return (
        <FeatureArea>
          {this.renderTools()}
        </FeatureArea>
      )
    }
  }
  render() {


    return(
      <LanguageThemeProvider>
        <Container>
          <ContentArea twig={Math.floor(this.props.index * 77 % 10) * 10}>
            <DateContent>{this.props.date}</DateContent>
            <Title>{this.props.title}</Title>
            <ContentBlock>
              <Markdown
                source={this.props.content}
                renderers={{Link: RouterLink}}
              />
            </ContentBlock>
          </ContentArea>
          { this.renderFeatureArea() }
        </Container>
      </LanguageThemeProvider>
    )
  }
}

export default Post;
