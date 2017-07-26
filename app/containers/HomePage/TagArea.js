import React from 'react';

import styled from 'styled-components';
import Isvg from 'react-inlinesvg';

import CloseIcon from 'assets/images/icons/close.svg';
import Tags from 'containers/Tags';

const Container = styled.div`
  width: 100%;
  border-bottom: 2px solid black;
  padding: 0px 20px 10px;
  position: relative;
  display: ${p=>p.show?"block":"none"};
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
        <CloseButton onClick={()=>this.props.hideTagArea()}>
          <Isvg src={CloseIcon} />
        </CloseButton>
        <Tags {...this.props} align={'center'} showClear={true} />
      </Container>
    );
  }
}

export default TagArea;
