import styled from 'styled-components';
export default styled.h1`
margin-top: 0;
position: relative;
margin-bottom: 0px;
font-size: 48px;

&::before {
  content: ' ';
  position: absolute;
  width: 48px;
  border-bottom: 2px solid;
  ${props=>props.lang==='ar'?'right':'left'}: 0;
`;
