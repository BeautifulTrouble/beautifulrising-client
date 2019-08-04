import styled from 'styled-components';

export default styled.div`
  padding-top: 49px;
  width: 370px;
  min-width: 370px;

  @media(max-width: 1320px) {
    width: 270px;
    min-width: 270px;
  }
  @media(max-width: 970px) {
    display: none;
  }
`;
