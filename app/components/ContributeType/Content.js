import styled from 'styled-components';

export default styled.div`
  display: ${props=>props.show?'block':'none'};

  @media(max-width: 1320px) {
    display: none;
  }
`;
