import styled from 'styled-components';

export default styled.li`
  vertical-align: top;
  display: inline-block;
  list-style: none;
  width: 18%;
  margin-right: 2%;
  opacity: ${p=>p.isChosen?1:0.5};
  &:last-child {
    margin-right: 0;
  }

  svg {
    width: 100%;
  }
`;
