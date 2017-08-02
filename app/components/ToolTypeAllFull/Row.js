import styled from 'styled-components';

export default styled.div`
  text-align: center;
  margin-bottom: 38px;
  
  &::after {
    content: ' ';
    clear: both;
    display: block;
  }
`;
