import styled from 'styled-components';
export default styled.p`
  padding: 2px;
  position: relative;
  display: ${props=> !props.show ? 'none' : 'block'};
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;

  // &::after {
  //   content: ' ';
  //   height: 40px;
  //   border: solid;
  //   width: 0px !important;
  //   position: absolute;
  //   ${p=>p.lang==='ar'?'left':'right'}: 30px;
  //   bottom: -20px;
  //   border-width: 0 1px 0 0;
  // }
`;
