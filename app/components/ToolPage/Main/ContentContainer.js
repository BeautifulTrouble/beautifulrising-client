import styled from 'styled-components';

export default styled.article`
  display: block;
  width: 100%;
  blockquote {
    margin-block-start: 0;
    margin-block-end: 0;
  }
  blockquote p {
    margin: 0;
  }
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
