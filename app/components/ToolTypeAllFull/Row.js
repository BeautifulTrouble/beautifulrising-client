import styled from 'styled-components';

export default styled.div`
  text-align: center;
  &:first-child {
    margin-bottom: 22px;
  }
  &::after {
    content: ' ';
    clear: both;
    display: block;
  }
`;
