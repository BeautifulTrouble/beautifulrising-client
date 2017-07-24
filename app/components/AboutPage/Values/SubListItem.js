import styled from 'styled-components';
export default styled.li`
  list-style: none;
  text-align: ${p=>p.lang==='ar'?'right':'left'};
`;
