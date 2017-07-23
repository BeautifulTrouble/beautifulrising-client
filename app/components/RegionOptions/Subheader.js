import styled from 'styled-components';
export default styled.h3`
  width: 50%;
  padding: 2px;
  border: solid;
  border-width: 0 0 2px;
  position: relative;
  display: ${props=> !props.show ? 'none' : 'block'};

  &::after {
    content: ' ';
    height: 40px;
    border: solid;
    width: 0px !important;
    position: absolute;
    ${p=>p.lang==='ar'?'left':'right'}: 30px;
    bottom: -20px;
    border-width: 0 1px 0 0;
  }
`;
