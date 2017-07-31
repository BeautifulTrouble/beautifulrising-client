import styled from 'styled-components';
export default styled.h3`
  font-size: ${p=>p.theme.lang==='ar'?'30px':'40px'};
  text-transform: uppercase;
  position: relative;
  margin: 0;
  padding-${p=>p.theme.lang==='ar'?'right':'left'}: 46px;
  .isvg.loaded {
    position: absolute;
    top: ${p=>p.theme.lang==='ar'?'0':'8px'};
    ${p=>p.theme.lang==='ar'?'right':'left'}: 0;
  }
  * {
    line-height: 1;
    vertical-align: middle;
    display: inline-block;
  }
  border-bottom: 5px solid;
  padding-bottom: 0;
`;
