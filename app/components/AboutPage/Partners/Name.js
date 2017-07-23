import styled from 'styled-components';
export default styled.h5`
font-size: 14px !important;
text-transform: uppercase;
position: relative;

font-weight: 800; font-family: 'Avenir', 'Kaff', sans-serif;
&::before {
  content: ' ';
  width: 42px;
  height: 1px;
  border-bottom: 2px solid black;
  position: absolute;
  top: -10px;
  ${p=>p.lang==='ar'?'right':'left'}: 0;
}
`;
