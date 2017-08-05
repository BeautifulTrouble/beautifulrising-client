import styled from 'styled-components';

export default styled.div`
  padding-left: 15px;
  text-align: ${p=>p.ar?'right':'left'};
  & p:last-child {
    color: gray;
  }

  p {
    margin: 0;
  }

  margin: 36px 0;
`;
