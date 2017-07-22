import styled from 'styled-components';

export default styled.div`
  margin-top: 5px;
  padding: 70px 0 0;
  position:relative;

  &:before {
    content: ' '
    display: inline-block;
    width: 2px;
    border-right: 1px solid;
    height: 50px;
    position: absolute;
    left: 50%;
    top: 10px;
  }
`;
