import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: 48px;
  ${p=>p.lang==='ar'?'left':'right'}: 34px;
  z-index: 200;
  max-width: 50%;

  @media(max-width: 1320px) {
  }
  @media(max-width: 970px) {
    display: none;
  }
`;
