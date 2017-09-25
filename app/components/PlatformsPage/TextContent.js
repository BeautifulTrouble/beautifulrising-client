import styled from 'styled-components';
export default styled.div`
  width: 30%;
  float: ${props=>props.lang==='ar'?'right':'left'};
  text-align: ${props=>props.lang==='ar'?'right':'left'};
  * {
    text-align: ${props=>props.lang==='ar'?'right':'left'};
  }

  @media(max-width: 1320px) {
    width: 100%;
    float: none;
    padding: 10px;
  }
`;
