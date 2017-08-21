import styled from 'styled-components'
export default styled.div`
height: 90px;
margin-bottom: 36px;
margin-top: 24px;
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
