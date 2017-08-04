import styled from 'styled-components';
import { Header } from 'components/ToolPage/Sidebar';
export default styled(Header)`

  font-size: ${p=>p.theme.lang==='ar'?'40px':'40px'};
  padding-${p=>p.theme.lang==='ar'?'right':'left'}: 46px;
  .isvg.loaded {
    position: absolute;
    top: ${p=>p.theme.lang==='ar'?'8px':'8px'};
    ${p=>p.theme.lang==='ar'?'right':'left'}: 0;
  }
  * {
    line-height: 1;
    vertical-align: middle;
    display: inline-block;
  }
`;
