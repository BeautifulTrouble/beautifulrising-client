import styled from 'styled-components';

export default styled.div`
  position: absolute;
  z-index: 100;
  width: calc(100% - 90px);
  height: 100%;
  padding-top: 50px;

  @media(max-width: 1320px) {
    padding-top: 26px;
  }
`;
