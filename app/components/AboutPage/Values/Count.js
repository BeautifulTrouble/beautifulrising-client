import styled from 'styled-components';
export default styled.h4`
  display: inline-block;
  border: 2px solid;
  border-width: 0 0 2px;
  padding: 10px 20px 2px 5px;
  margin: 0;
  font-size: 30px;
  font-family: 'KnockOut', 'Greta';
  margin-bottom: 4px;
  &::after {
    content: ' ';
    display: block;
    clear: both;
  }
`;
