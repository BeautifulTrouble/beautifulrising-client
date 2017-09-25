import React from 'react';

import styled from 'styled-components';
import Isvg from 'react-inlinesvg';
import TranslatableStaticText from 'containers/TranslatableStaticText';
import CloseIcon from 'assets/images/icons/close.svg';
import Tags from 'containers/Tags';

import staticText from './staticText';

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  border-bottom: 2px solid black;
  padding: 0px 44px 15px;
  padding-bottom: ${p=>p.show?15:0};
  position: relative;
  border-bottom: ${p=>p.show?'2px solid black':0};
  max-height: ${p=>p.show?'100vh':0};
  transition: max-height 0.8s ease, border-bottom 0.8s ease, padding-bottom 0.4s ease;

  @media(max-width: 1320px) {
    height: calc(100% - 137px);
    border-bottom: 0;
    z-index: 700px;
    padding: 0px 40px 0;
    overflow: auto;
    display: inline-block;
  }
`;
const CloseButton = styled.button`
  outline: none;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;

  svg {
    width: 15px !important;
    height: 15px !important;
  }
`;


class TagArea extends React.PureComponent {

  render() {
    return (
      <Container show={this.props.show}>
        <Tags {...this.props} align={'center'} showClear={true} />
      </Container>
    );
  }
}

export default TagArea;
