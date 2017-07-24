import styled from 'styled-components';
export default styled.ul`
  padding: 0;
  margin: 0;

  &::after {
    content: ' ';
    display: block;
    clear: both;
  }
`;
