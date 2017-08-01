import styled from 'styled-components';

export default styled.article`
  display: block;
  width: 100%;
  * {
    p img {
      width: 100%;
    }
  }
  &::after {
    display: block;
    content: ' ';
    clear: both;
  }
`;
