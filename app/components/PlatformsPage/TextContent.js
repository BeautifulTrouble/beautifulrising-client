import styled from 'styled-components';
export default styled.div`
  width: 30%;
  float: ${props=>props.lang==='ar'?'right':'left'};
  text-align: ${props=>props.lang==='ar'?'right':'left'};
  * {
    text-align: ${props=>props.lang==='ar'?'right':'left'};
  }
`;
