import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: 48px;
  ${p=>p.lang==='ar'?'left':'right'}: 34px;
  z-index: 0;

  @media(max-width: 700px) {
    display: none;
  }
`;
