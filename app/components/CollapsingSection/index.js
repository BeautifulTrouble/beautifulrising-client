/**
*
* CollapsingSection
*
*/

import React from 'react';
import styled from 'styled-components';

import ArrowIcon from 'assets/images/icons/arrow.svg';
import Isvg from 'react-inlinesvg';

import LanguageThemeProvider from 'components/LanguageThemeProvider';

const Container = styled.div`

`;

const HeaderContainer = styled.div`
  border-bottom: 2px solid black;
`;
const Header = styled.div`
  display: inline-block;
  padding-right: 20px;
  width: 100%;
`;
const ArrowContainer = styled.span`
  display: inline-block;
  transition: transform 0.5s ease;
  position: absolute;

  ${p=>{
    if (p.theme.isArabic) {
      return `
        transform: ${p.showing ? 'rotate(270deg)' : 'rotate(360deg)'} ${p.showing ? 'translate(100%, 0%)' : 'translate(0, -50%)'};
        left: 20px;
      `;
    } else {
      return `
      transform: ${p.showing ? 'rotate(270deg)' : 'rotate(180deg)'} ${p.showing ? 'translate(100%, 0%)' : 'translate(0, 50%)'};
      right: 20px;
      `
    }
  }}

  top: 50%;
  svg {
    width: 12px !important;
    * {
      fill: ${p=>!p.showing ? '#afafaf' : '#000000'};
      transition: fill 0.5s ease;
    }
  }
`;
const Content = styled.div`
  max-height: ${p=>p.show?'5000px':'0'};
  overflow: hidden;
  transition: max-height 0.7s ease;
`;

const ActionButton = styled.button`
  outline: none;
  padding: 0;
  cursor: pointer;
  width: 100%;
  padding-right: 20px;
  position: relative;
`;

class CollapsingSection extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super();
    this.state = {
      showContent: props.isShown || false
    }
  }

  toggleContent() {
     ("Hello WorldX");
    this.setState({showContent: !this.state.showContent} );
  }

  render() {
    return (
      <Container>
        <LanguageThemeProvider>
          <HeaderContainer>
            <ActionButton onClick={this.props.onClick !== undefined ? () => this.props.onClick() : this.toggleContent.bind(this)}>
              <Header>{ this.props.header }</Header>
              <ArrowContainer showing={this.props.shouldOpen !== undefined ? this.props.shouldOpen : this.state.showContent}>
                <Isvg src={ArrowIcon} />
              </ArrowContainer>
            </ActionButton>
          </HeaderContainer>
          <Content show={this.props.shouldOpen !== undefined ? this.props.shouldOpen : this.state.showContent}>
            {React.Children.toArray(this.props.children)}
          </Content>
        </LanguageThemeProvider>
      </Container>
    );
  }
}

CollapsingSection.propTypes = {
  // header: React.PropTypes.object.required
  onClick: React.PropTypes.func
};

export default CollapsingSection;
