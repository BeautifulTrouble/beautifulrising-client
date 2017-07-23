import styled from 'styled-components'
export default styled.div`
&::after {
  content: ' '
  display: inline-block;
  width: 2px;
  border-right: 1px solid;
  height: 90px;
  position: absolute;
  left: 50%;
}
`;
