import styled from 'styled-components';
export default styled.div`
  width: 69%;
  float: ${props=>props.lang==='ar'?'right':'left'};
  height: 400px;
  display: inline-block;

  @media(max-width: 1170px) {
    width: 100%;
    float: none;
    padding: 10px;
    height: 65vmin;
  }
`;
