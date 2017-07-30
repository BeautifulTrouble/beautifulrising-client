import styled from 'styled-components';
export default styled.div `
  position: absolute;
  width: 100px;

  // display: ${props=>props.show?'block':'none'};
  opacity: ${p=>p.show?1:0};
  visibility: ${p=>p.show?'visible':'hidden'};
  transition: opacity 0.2s ease;

  ${p=> {

    if (p.orientation && p.orientation === 'vertical') {
      return `
        top: 130%;
        left: 0;
      `;
    } else {
      return `
        ${p.lang==='ar' ? 'right' : 'left'}: 100%;
      `;
    }

  }}

  a, button {
  }

  button {
    ${p=>p.orientation&&p.orientation==='vertical'?'display:block;':''}
  }
`;
