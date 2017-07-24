import styled from 'styled-components';
export default styled.li`list-style: none;
  color: #838486;
  width: 45%;
  display: inline-block;
  &:first-child {
    float: ${p=>p.lang==='ar'?'right':'left'};
  }
  &:last-child {
    float: ${p=>p.lang==='ar'?'left':'right'};
  }
`;
