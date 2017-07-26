import styled from 'styled-components';
import {ToolViewport} from '../Tools';
export default styled(ToolViewport)`
  background-color: ${p=>p.grayout ? 'rgba(89,89,89,1)' : 'rgba(0,0,0,0.5)'};
  width: 100%;
  height: 100%;
  position: relative;
  transition: background-color 0.3s ease;
`;
