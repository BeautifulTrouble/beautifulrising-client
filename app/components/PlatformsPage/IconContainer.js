import styled from 'styled-components';
export default styled.div`
  position: absolute;
  top: 20px;
  ${props=>props.lang==='ar'?'right: -70px':'left: -120px'};
  width: 100px;
  text-align: right;
`;
