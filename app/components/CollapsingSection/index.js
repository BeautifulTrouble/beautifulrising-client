/**
*
* CollapsingSection
*
*/

import React from 'react';
import styled from 'styled-components';

import ArrowIcon from 'assets/images/icons/arrow.svg';
import Isvg from 'react-inlinesvg';


const Container = styled.div`

`;

const HeaderContainer = styled.div`
  padding: 4px 0 3px;
  border-bottom: 2px solid black;
`;
const Header = styled.div`
  display: inline-block;
  padding-right: 20px;
  width: 100%;
`;
const ArrowContainer = styled.span`
  display: inline-block;
  transform: ${p=>!p.showing ? 'rotate(180deg)' : 'rotate(270deg)'} ${p=>!p.showing ? 'translate(0, 50%)' : 'translate(100%, 0%)'};
  transition: transform 0.5s ease;
  position: absolute;
  right: 20px;
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
  max-height: ${p=>p.show?'100vh':'0'};
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
    this.setState({showContent: !this.state.showContent} );
  }

  render() {
    return (
      <Container>
        <HeaderContainer>
          <ActionButton onClick={this.toggleContent.bind(this)}>
            <Header>{ this.props.header }</Header>
            <ArrowContainer showing={this.state.showContent}>
              <Isvg src={ArrowIcon} />
            </ArrowContainer>
          </ActionButton>
        </HeaderContainer>
        <Content show={this.state.showContent}>
          {React.Children.toArray(this.props.children)}
        </Content>
      </Container>
    );
  }
}

CollapsingSection.propTypes = {
  // header: React.PropTypes.object.required
};

export default CollapsingSection;
