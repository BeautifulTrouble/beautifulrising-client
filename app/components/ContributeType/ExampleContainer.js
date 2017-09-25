import styled from 'styled-components';

export default styled.div`
  display: flex;

  @media(max-width: 1320px) {
    display: block;
    text-align: center;

    & > div {
      display: inline-block;
      float: none;
    }
  }
`;
