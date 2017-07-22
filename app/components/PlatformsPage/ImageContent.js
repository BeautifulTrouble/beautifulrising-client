import styled from 'styled-components';
export default styled.div`
  width: 69%;
  float: ${props=>props.lang==='ar'?'right':'left'};
  height: 400px;
  display: inline-block;
  margin-top: 130px;
`;
