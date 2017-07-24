import styled from 'styled-components';
export default styled.li`
  display: table-cell;
  text-align: center;
  position: relative;
  white-space: nowrap;
  padding-${p=>p.lang==='ar'?'left':'right'}: 15px;
  &::after {
    position: absolute;
    top: 2px;
    ${p=>p.lang==='ar'?'left':'right'}: -1px;
    content: '+';
    display: inline-block;
    padding: 0px 3px;
  }

  &:first-child .typeName {
    text-decoration: underline;
  }

  &:last-child {
    padding-${p=>p.lang==='ar'?'left':'right'}: 0px;
    padding-${p=>p.lang==='ar'?'right':'left'}: 5px;
    &::after { content: ''; }
  }
`;
