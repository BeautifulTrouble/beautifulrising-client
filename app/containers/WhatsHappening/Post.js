import React, { PropTypes } from 'react';
import LanguageThemeProvider from 'components/LanguageThemeProvider';
import LatinThemeProvider from 'components/LatinThemeProvider'
import Markdown from 'react-markdown';
import { RouterLink } from 'utils/markdown';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import BlockViewItem from 'containers/HomePage/BlockViewItem';
import ImageSlideshow from 'components/ImageSlideshow';
import styled from 'styled-components';
import ContentBlock from 'components/ContentBlock';
import HeaderBlock from 'components/HeaderBlock';
import Isvg from 'react-inlinesvg';
import ArrowIcon from 'assets/images/icons/arrow.svg';
import LeftArrow from 'assets/images/icons/arrows-20.svg';
import RightArrow from 'assets/images/icons/arrows-21.svg';

const Container = styled.div`
  display: flex
  margin-top: 95px;

  @media(max-width: 1170px) {
    display: block;
    margin-top: 15px;
  }
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
    ${p=>p.theme.isArabic?'left':'right'}: -25px;
    height: 0;
    border-top: 2px solid;
    top: ${p=>p.twig + 10}%;
  }

  @media(max-width: 1170px) {
    display: block;
    width: 100%;
    min-width: 100%;
    border: none;
    padding: 40px;

    &::after {
      border: none;
    }
  }
`;
const FeatureArea = styled.div`
  flex-grow: 1;
  align-items: stretch;
  display: inline-block;
  padding-${p=>p.theme.isArabic?'right':'left'}: 80px;
  padding-top: 45px;
  padding-bottom: 70px;

  @media(max-width: 700px) {
    height: 300px;
  }

  @media(max-width: 1170px) {
    display: block;
    width: 100%;
    min-width: 100%;
    padding: 10px;
    text-align: center;

    & > div {
      float: none;
      margin: 0;
      display: inline-block;
      margin-bottom: 20px;
    }
  }
`;

const DateContent = styled(ContentBlock)`
  font-style: italic;
  font-weight: 12px;
`;
const Title = styled(HeaderBlock)`
  font-size: 40px;
  line-height: 44px;
`;
const FeatureImage = styled.img`width: 100%`;
const BEAUTIFULRISING_URL = `//www.beautifulrising.org/`;

const PreviousButton = styled.div`
  display: inline-block;
  opacity: 0.7;
`;
const NextButton = styled.div`
  display: inline-block;
  opacity: 0.7;
`

class Post extends React.PureComponent {

  constructor(props) {
    super();
  }

  renderSlideshow() {
    return (
      <ImageSlideshow images={
        this.props.slideshow.map(item => BEAUTIFULRISING_URL + item)
      }
        previousButton={(<PreviousButton><Isvg src={LeftArrow} /></PreviousButton>)}
        nextButton={(<NextButton><Isvg src={RightArrow} /></NextButton>)}
      />
    )
  }

  renderImage() {
    return (
      <ImageSlideshow images={[
        BEAUTIFULRISING_URL + this.props.image
      ]}
        previousButton={(<PreviousButton><Isvg src={ArrowIcon} /></PreviousButton>)}
        nextButton={(<NextButton><Isvg src={ArrowIcon} /></NextButton>)}
      />
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

    if (this.props.slideshow) {
      return (
        <FeatureArea>
          {this.renderSlideshow()}
        </FeatureArea>
      );
    }

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
            <LatinThemeProvider>
              <DateContent>{this.props.date}</DateContent>
              <Title>{this.props.title}</Title>
              <ContentBlock>
                <Markdown
                  source={this.props.content}
                  renderers={{Link: RouterLink}}
                />
              </ContentBlock>
            </LatinThemeProvider>
          </ContentArea>
          { this.renderFeatureArea() }
        </Container>
      </LanguageThemeProvider>
    )
  }
}

export default Post;
