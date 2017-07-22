import styled from 'styled-components';
export default styled.div`
  margin-top: 30px;
  ${props=>props.lang==='ar'?'padding-right':'padding-left'}: 96px;
`;
