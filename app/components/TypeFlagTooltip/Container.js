import styled from 'styled-components';
export default styled.div`
  position: absolute;
  ${p=>p.lang==='ar'?'right':'left'}: 50%;
  transform: ${p=>p.lang==='ar'?'translateX(50%)':'translateX(-50%)'};
  border: 2px solid;
  font-weight: bold;
  top: -65px;
  padding: 12px 8px 3px;
  display: ${props=>props.show?'block':'none'};
  // display: block;
  background-color: white;
  text-align: center;

`;
