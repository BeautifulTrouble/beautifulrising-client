import styled from 'styled-components';
export default styled.div `
  position: absolute;
  width: 100px;
  ${props=>props.lang==='ar' ? 'right' : 'left'}: 100%;
  // display: ${props=>props.show?'block':'none'};
  opacity: ${p=>p.show?1:0};
  visibility: ${p=>p.show?'visible':'hidden'};
  transition: opacity 0.2s ease;

  a, button {


  }
`;
