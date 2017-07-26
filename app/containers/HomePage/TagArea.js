import React from 'react';

import styled from 'styled-components';
import Tags from 'containers/Tags';


const Container = styled.div`
  width: 100%;
  border-bottom: 2px solid black;
  padding: 0px 20px 10px;
`;
class TagArea extends React.PureComponent {

  render() {
    return (
      <Container>
        <Tags {...this.props} align={'center'} showClear={true} />
      </Container>
    );
  }
}

export default TagArea;
