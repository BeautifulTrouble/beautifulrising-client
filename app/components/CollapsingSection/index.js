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
  border-bottom: 2px solid black;
`;

const HeaderContainer = styled.div`
  padding: 4px 0;
`;
const Header = styled.div`
  display: inline-block;
  padding-right: 20px;
`;
const ArrowContainer = styled.span`
  display: inline-block;
  transform: ${p=>!p.showing ? 'rotate(180deg)' : 'rotate(270deg)'};
  transition: transform 0.5s ease;
  margin-left: -10px;
  margin-top: 2px;
  svg {
    width: 12px !important;
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
`;

class CollapsingSection extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = {
      showContent: false
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
