import styled from 'styled-components';
export default styled.li`
  display: inline-block;
  &:first-child {
    margin-${p=>{("XXX", p.lang); return p.lang==='ar'?'left':'right'}}: 26px;
  }
`;
