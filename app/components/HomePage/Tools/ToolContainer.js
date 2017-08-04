import styled from 'styled-components';
export default styled.div`
  ${props=>props.lang==='ar' ? 'float: right' : 'float: left'};
  text-align: left;
`;
