import styled from 'styled-components';
export default styled.div`
  text-align: ${props=>props.lang==='ar'?'right':'left'};
`;
