import styled from 'styled-components';
export default styled.h3`
  margin: 20px 0 0;
  padding: 0;
  line-height: 30px;
  font-size: 30px;
  position: relative;
  a {
    color: black;
    text-decoration: none;
  }
  &::before {
    content: url(${props => props.flag });
    display: block;
  }

`;
