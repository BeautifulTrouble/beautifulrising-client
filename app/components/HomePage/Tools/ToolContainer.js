import styled from 'styled-components';
export default styled.div`
  ${props=>props.lang==='ar' ? 'float: right' : 'float: left'};
  margin-right: 10px;
  margin-bottom: 10px;
  text-align: left;
`;
