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
  &::after {
    content: url(${props => props.flag });
    position: absolute;
    transform: scale(.75) translate(-10px,-5px);
    box-sizing: border-box;
  }

`;
